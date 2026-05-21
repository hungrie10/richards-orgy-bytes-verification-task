import React, { useEffect } from "react";
import data from "./data.json";
import logo from "../assets/logo.png";
import { useState } from "react";

function Verify({ username }) {
  const my_data = data;
  const [status, setStatus] = useState("verified");
  const [class_to_be_added, setClassToBeAdded] = useState("verified");
  const [categories, setCategories] = useState([]);
  const [joined, setJoined] = useState("");

  function handle_username() {
    console.log(typeof username);
    console.log(my_data[0]);
    console.log(username);

    let curr_user = my_data.find((i) => i.name == username);
    setStatus(curr_user.status);

      if (status == "verified") {
          setClassToBeAdded('verified')
        }
        else if (status == "pending") {
          setClassToBeAdded('pending')
      }
        else if (status == "unverified") {
          setClassToBeAdded('unverified')
      }
      
    setCategories(curr_user.categoried);
    setJoined(curr_user.joined_date);
    console.log(curr_user);
  }

  useEffect(() => {
    handle_username();
  }, []);

  return (
    <section id="verify_me">
      {/* {username} */}
      <div id="verification_card">
        <div id="user_details">
          <h2>{username}</h2>
          <span className={`status ${class_to_be_added}`}>
            <strong>{status}</strong>
          </span>
          {status == "verified" && (
            <ul className="category_list">
              {categories.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          )}

          {status == "pending" && <p>I'm Pending</p>}
          {status == "unverified" && <p>I'm Unverified</p>}

          <small>{joined}</small>
        </div>
        <img src={logo} alt="" />
      </div>
    </section>
  );
}

export default Verify;
