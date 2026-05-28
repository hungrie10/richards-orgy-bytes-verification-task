import { Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faPerson, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../public/logo.png";
import verifiy from "./assets/verification_badge.svg";
import Create from "./pages/Create";
import Verified from "./pages/Verified";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <main id="main_page">
      <section id="inner_main">
        <aside>
          <div>
            <span>
              <img width={50} src={logo} alt="" />
              <h2>OrgByte</h2>
            </span>
            <p>Where Innovation Meets Integrity</p>
          </div>

          <ul className="sidebar_links">
            <li>
              <Link to={"/"}>
                <FontAwesomeIcon icon={faPerson} />
                <span>
                  <h2>Create an Account</h2>
                  <p>Join OrgByte Today</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to={"/verified"}>
                <FontAwesomeIcon icon={faTicket} />
                <span>
                  <h2>Get Verified</h2>
                  <p>Verify your Identity</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to={"/signin"}>
                <FontAwesomeIcon icon={faComputer} />
                <span>
                  <h2>Check Verification Status</h2>
                  <p>
                    See if you are a verified member of our verification program
                  </p>
                </span>
              </Link>
            </li>
          </ul>

       
        </aside>
        <section id="org_byte_forms">
          <Routes>
            <Route path="/"element={ <Create />} />
            <Route path="/verified"element={ <Verified />} />
            <Route path="/signin"element={ <SignIn />} />
        </Routes>
      </section>
      </section>

    </main>
  );
}

export default App;
