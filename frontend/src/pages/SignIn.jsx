import { useState } from "react";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function submitSelection(e) {
    e.preventDefault();

    const formData = {
      name,
      email,
    };

    const res = await fetch("http://localhost:5000/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
  }
  return (
    <section className="my_forms">
      <form onSubmit={(e) => submitSelection(e)}>
        <div>
          <h1>Welcome Back</h1>
          <p>Now to check your verification status</p>
        </div>

        <div>
          <label htmlFor="">
            <p>Username</p>
            <input type="text" placeholder="Enter your username" onChange={(e) => setName(e.target.name)}/>
          </label>
          <label htmlFor="">
            <p>Email</p>
            <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.name)}/>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SignIn;
