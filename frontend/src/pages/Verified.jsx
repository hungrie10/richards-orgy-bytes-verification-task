import React from "react";

function Verified() {
  return (
    <section>
      <form>
        <h1>Enter a Verification</h1>
        <p>We Just Sent you a verification code</p>

        <label>
          <p>Enter your verification code</p>
          <input
            type="text"
            placeholder="Enter your verification code"
            name=""
            id=""
          />
        </label>

        <button>Confirm Verification Code</button>
      </form>
    </section>
  );
}

export default Verified;
