import React, { useState } from "react";
import logo from "./assets/logo.png";
import Verify from "./components/Verify";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [filled, setFilled] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setUsername(name);
      setFilled(!filled);
    }
    else {
      alert("Fill in a Username")
    }
  };

  return (
    <main id="form-page">
      {username && <Verify username={username} />}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="brand">
          <img src={logo} width={40} height={40} />
          <h4>OrgByte</h4>
        </div>
        <br />
        <div id="desc">
          <h2>Love to Have you - {name}</h2>
          <p> Get verified today </p>
        </div>

        <div id="fill_me">
          <input
            value={name}
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button type="submit">Check Me</button>
        </div>
      </form>
    </main>
  );
}

export default App;
