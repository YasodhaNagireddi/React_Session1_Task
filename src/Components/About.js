import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <>
      <h1 className="about-heading">About Us</h1>
      <div className="about-container">
        <div className="about-sub-1">
          <img
            src="https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006644.jpg?size=626&ext=jpg&ga=GA1.1.136947427.1695810927&semt=ais"
            alt=" breakfast-img"
            className="about-img"
          />
        </div>
        <div className="about-sub-2">
          <p className="about-description">
            Proin a ligula a velit convallis pretium. Vestibulum nec eros nec
            odio ornare viverra nec vel dui. Nullam finibus tempus felis ut
            volutpat. Duis sagittis mi dui, sit amet porta ipsum finibus vitae.
            Sed rhoncus velit eget nibh dignissim. Proin a ligula a velit
            convallis pretium. Vestibulum nec eros nec odio ornare viverra nec
            vel dui. Nullam finibus tempus felis ut volutpat. Duis sagittis mi
            dui, sit amet porta ipsum finibus vitae. Sed rhoncus velit eget nibh
            dignissim. Proin a ligula a velit convallis pretium. Vestibulum nec
            eros nec odio ornare viverra nec vel dui. Nullam finibus tempus
            felis ut volutpat. Duis sagittis mi dui, sit amet porta ipsum
            finibus vitae. Sed rhoncus velit eget nibh dignissim.
          </p>
          <button className="about-btn">Read More</button>
        </div>
      </div>
    </>
  );
};

export default About;
