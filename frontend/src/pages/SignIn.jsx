import React from "react";

function SignIn() {
  return (
    <section>
      <form>
        <h1>Welcome Back</h1>
        <p>Now to check your verification status</p>

        <div>
          <label htmlFor="">
            <p>Username</p>
            <input type="text" placeholder="Enter your username" />
          </label>
          <label htmlFor="">
            <p>Email</p>
            <input type="text" placeholder="Enter your email" />
          </label>
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
}

export default SignIn;
