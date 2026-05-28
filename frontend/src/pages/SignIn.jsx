import { useState } from "react";
import VerificationBadge from "../component/VerificationBadge";

function SignIn() {
  const [email, setEmail] = useState("");
  const [typed, setTyped] = useState(false);

  

  async function submitSelection(e) {
   setTyped(true)
   e.preventDefault();
   setTimeout(() => {
      setTyped(false)
    }, 1200);
  }

  return (
    <section className="my_forms">
      {typed && <VerificationBadge email={email} />}


      <form onSubmit={(e) => submitSelection(e)}>
        <div>
          <h1>Welcome Back</h1>
          <p>Now to check your verification status</p>
        </div>

        <div>
       
          <label htmlFor="">
            <p>Email</p>
            <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SignIn;
