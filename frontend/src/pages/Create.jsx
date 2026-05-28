import React, { useState } from "react";

function Create() {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    "Graphic Designer",
    "Illustrator",
    "Animator",
    "Photographer",
    "Videographer",
    "Film Director",
    "Actor",
    "Musician",
    "Songwriter",
    "Dancer",
    "Fashion Designer",
    "Interior Designer",
    "Architect",
    "Chef",
    "Baker",
    "Barista",
    "Writer",
    "Copywriter",
    "Journalist",
    "Editor",
    "Content Creator",
    "Social Media Manager",
    "Marketing Manager",
    "Brand Strategist",
    "Event Planner",
    "Entrepreneur",
    "Teacher",
    "Lecturer",
    "Therapist",
    "Counselor",
    "Travel Blogger",
    "Art Curator",
    "Museum Guide",
    "Makeup Artist",
    "Hair Stylist",
  ];
  function handleChange(value) {
    setSelectedItems((prev) => {
      if (prev.includes(value)) {
        // remove it
        return prev.filter((item) => item !== value);
      } else {
        // add it
        return [...prev, value];
      }
    });
  }

  function submitSelection() {
    alert("Selected items: " + selectedItems.join(", "));
  }
  return (
    <section className="my_forms">
      <form>
        <h1>Create an account</h1>
        <p>Join Orgbyte and amazing freelancers and business</p>
        <div>
          <label>
            <p>Full Name</p>
            <input type="text" placeholder="Enter your Full Name" />
          </label>
          <label>
            <p>Email</p>
            <input type="email" placeholder="Enter your Email" />
          </label>
        </div>
        <div>
          <div className="dropdown">
            <button className="dropbtn">Select Items</button>

            <div className="dropdown-content">
              {items.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleChange(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <button onClick={submitSelection} className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Create;
