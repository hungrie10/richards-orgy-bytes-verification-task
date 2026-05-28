import { useState } from "react";

function Verified() {
  const [token, setToken] = useState("");

  async function submitSelection(e) {
    e.preventDefault();

    const formData = {
     token,
    };

    const res = await fetch("https://richards-orgy-bytes-verification-task.onrender.com/verify", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    // location.reload();
  }

  return (
    <section className="my_forms">
      <form onSubmit={(e) => submitSelection(e)}>
        <div>
          <h1>Enter a Verification</h1>
          <p>We Just Sent you a verification code</p>
        </div>

        <div>
          <label>
            <p>Enter your verification code</p>
            <input
              value={token}
              type="text"
              placeholder="Enter your verification code"
              name=""
              id=""
              onChange={(e) => setToken(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Confirm Verification Code</button>
      </form>
    </section>
  );
}

export default Verified;
