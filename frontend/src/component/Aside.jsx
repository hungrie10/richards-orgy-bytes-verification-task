import React from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faPerson, faTicket } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/logo.png";


function Aside() {
  return (
    <aside>
      <div id="org_intro">
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
  );
}

export default Aside;
