import React from "react";

function Verified() {
  return (
    <section className="my_forms">
      <form>
        <div>
          <h1>Enter a Verification</h1>
          <p>We Just Sent you a verification code</p>
        </div>

        <div>
          <label>
            <p>Enter your verification code</p>
            <input
              type="text"
              placeholder="Enter your verification code"
              name=""
              id=""
            />
          </label>
        </div>

        <button type="submit">Confirm Verification Code</button>
      </form>
    </section>
  );
}

export default Verified;
