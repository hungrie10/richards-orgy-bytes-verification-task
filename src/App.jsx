import React, { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main id="form-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="brand">
          <img src={logo} width={40} height={40} />
          <h4>OrgByte</h4>
        </div>
        <br />
        <div id="desc">
          <h2>Love to Have you {name}</h2>
          <p>Get verified today </p>
        </div>

        <div id="fill_me">
          <input
            value={name}
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button>Check Me</button>
        </div>
      </form>
    </main>
  );
}

export default App;
