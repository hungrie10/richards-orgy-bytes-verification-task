const fs = require("fs").promises;
const express = require("express");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const path = "./db.json";

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: "umav qtcf oecg ulem",
  },
});

async function sendEmail(to, subject, html) {
  try {
    await transporter.sendMail({
      from: "richardthed3veloper@gmail.com",
      to: to,
      subject: subject,
      html: html,
    });
    console.log("Email sent");
  } catch (err) {
    console.log(err);
  }
}

app.post("/register", async (req, res) => {
  const { name, email, categories } = req.body;

  if (!name || !email || !categories) {
    return res
      .status(400)
      .json({ message: "These fields are required to proceed" });
  }

  const data = await fs.readFile(path, "utf-8");

  let users = [];
  if (data) {
    users = JSON.parse(data);
  }

  let user = users.find((u) => u.email === email);

  if (!user) {
    const userID = uuidv4();
    const currentDate = new Date().toISOString().split("T")[0];
    const curr_user_object = {
      userID,
      name,
      email,
      categories,
      status: "pending",
      joinedDate: currentDate,
    };

    const token = jwt.sign(
      { id: userID, email: email },
      process.env.SECRET_WORD,
      { expiresIn: "1h" },
    );

    console.log(curr_user_object);

    users.push(curr_user_object);

    await sendEmail(
      email,
      "Welcome to the OrgByte Verification Program!",
      `
    <div>
        <h2>Here's your verification token</h2>
         <p>${token}</p>
    </div>
    `,
    );
    await fs.writeFile(path, JSON.stringify(users, null, 2));
    return res.status(201).json({
      message: "User registered successfully",
      user: curr_user_object,
    });
  }
  else {
    if (user.status === "unverified") {
      // Move them to pending, resend email
      user.status = "pending";
        user.name = name
      // Generate new token for verification
      const token = jwt.sign(
        { id: user.userID, email },
        process.env.SECRET_WORD,
        { expiresIn: "1h" },
      );

      await sendEmail(
        email,
        "Resend Verification Token",
        `
          <div>
            <h2>Complete your verification</h2>
            <p>${token}</p>
          </div>
          `,
      );

      // Save updated users to file
      await fs.writeFile(path, JSON.stringify(users, null, 2));

      return res.status(200).json({
        message: "User was unverified. Verification email resent.",
        user,
      });
    }
    else if (user.status === "verified") {
      return res.status(200).json({
        message: "User is already verified. You can log in.",
        user,
      });
    }
  }
});

app.post("/verify", async (req, res) => {
  try {
    const { token } = req.body;

    // Check if token exists
    if (!token) {
      return res.status(400).json({
        message: "Verification token is required",
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.SECRET_WORD);

    // Read users file
    const data = await fs.readFile(path, "utf-8");

    let users = [];

    if (data) {
      users = JSON.parse(data);
    }

    // Find matching user
    const user = users.find((user) => user.userID === decoded.id);

    // User not found
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.status = "verified";

    // Save updated users array
    await fs.writeFile(path, JSON.stringify(users, null, 2));

    return res.status(200).json({
      message: "User verified successfully",
      user,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Verification failed",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // Read users from file
    const data = await fs.readFile(path, "utf-8");
    let users = data ? JSON.parse(data) : [];

    // Find user
    const user = users.find((u) => u.email === email);

    // If user doesn't exist, auto-create (your task rule)
    if (!user) {
      const userID = uuidv4();
      const currentDate = new Date().toISOString().split("T")[0];

      const newUser = {
        userID,
        email,
        name: "Unknown",
        categories: [],
        status: "unverified",
        joinedDate: currentDate,
      };

      users.push(newUser);

      await fs.writeFile(path, JSON.stringify(users, null, 2));

      return res.status(201).json({
        message: "User created and is unverified",
        user: newUser,
      });
    }

    // If user exists, return their status
    return res.status(200).json({
      message: "User found",
      user: {
        userID: user.userID,
        email: user.email,
        status: user.status,
      },
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    "You have sucessfully connected to the OrgByte Verification endpoint",
  );
});
