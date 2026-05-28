import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import icon from "../assets/icon.svg";

function VerificationBadge({ email }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [categories, setCategories] = useState([]);

  async function submitSelection() {
    const formData = {
      email,
    };

    const res = await fetch("http://localhost:5000/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);

    const { user } = data;

    const { name, status, categories } = user;

    setName(name);
    setStatus(status);
    setCategories(categories);

    console.log(`
        name: ${name}
        status: ${status}
        categories: ${categories}
        `);
  }

  useEffect(() => {
    submitSelection();
  }, []);

  return (
    <article className="verification-card">
      <div>
        {/* <img src={icon} alt="" /> */}
        <FontAwesomeIcon icon={faIdBadge} />

        <p>This is the OrgByte Verification Program</p>
      </div>

      <div>
        <span className={`status-line ${status}`}></span>
        {status == "verified" && (
          <span>
            <p>{name} is ready to go</p>
          </span>
        )}
        {status == "unverified" && (
          <span>
            <p>You are unverified</p>
          </span>
        )}
        {status == "Pending" && (
          <span>
            <p>You are Pending</p>
          </span>
        )}
      </div>
      {/* <br /> */}
      {status == "verified" && (
        <ul>
          {categories?.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default VerificationBadge;
