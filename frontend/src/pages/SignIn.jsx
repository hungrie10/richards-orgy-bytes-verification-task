import React from "react";

function SignIn() {
  return (
    <section className="my_forms">
      <form>
        <div>
        <h1>Welcome Back</h1>
        <p>Now to check your verification status</p>
        </div>

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

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SignIn;
