import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-images">
          <img
            src="https://img.freepik.com/free-photo/beyti-kebab-served-with-ayran-pickles_141793-1868.jpg?size=626&ext=jpg&ga=GA1.2.142091225.1695830935&semt=ais"
            alt="food1"
            className="food-img"
          />
          <img
            src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?w=1060&t=st=1695896164~exp=1695896764~hmac=6d4d29d791e5a85924643256c6f05f08fc3e712aeafb426b8a8cd33e8a21d5f4"
            alt="food2"
            className="food-img"
          />
          <img
            src="https://img.freepik.com/free-photo/side-view-deep-fried-fish-fillet-with-red-onion-sauce-slice-lemon-plate_141793-4876.jpg?size=626&ext=jpg&ga=GA1.1.142091225.1695830935&semt=ais"
            alt="food3"
            className="food-img"
          />
          <img
            src="https://img.freepik.com/free-photo/side-view-cocktail-shots-with-slice-lemon-kiwi-slice-candles-bar_176474-3056.jpg?size=626&ext=jpg&ga=GA1.1.142091225.1695830935&semt=sph"
            alt="food4"
            className="food-img"
          />
        </div>
        <div className="footer-details">
          <div className="footer-section1">
            <h3 className="h3-heading">About</h3>
            <p className="des">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/665/665209.png"
                  alt="facebook"
                />
              </a>
              <br />
              <a href="https://twitter.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/665/665228.png"
                  alt="twitter"
                />
              </a>
              <br />
              <a href="https://www.instagram.com/accounts/login/?hl=en">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
                  alt="instagram"
                />
              </a>
              <br />
              <a href="https://www.youtube.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png"
                  alt="youtube"
                />
              </a>
              <br />
            </div>
          </div>
          <div className="footer-section2">
            <h3>Contact Info</h3>
            <div className="icon">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp30Ykik5mHp6bVVa8NKx9_7Pgb7Rwb4-pCTK5d2-cnSa87wOFvYSyeAoIgoH9gvSfTKQ&usqp=CAU"
                alt="phone"
              />
              <p>+91 9876543210</p>
            </div>
            <br />
            <div className="icon">
              <img
                src=" https://banner2.cleanpng.com/20180715/urc/kisspng-computer-icons-html-email-green-email-icon-5b4af8bac5a925.8003476815316399948096.jpg"
                alt="email"
              />
              <p>restaurant@gmail.com</p>
            </div>
            <br />
            <div className="icon">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASwSWpNiOqvCrWXMNCFcQKZT1FMWbj5R5Sv_21_2Y8mfxmE4y0Bq0gmEtQAIDbiT5lVE&usqp=CAU"
                alt="address"
              />
              <p>123 abcdd Newyork 10021 </p>
            </div>
          </div>
          <div className="footer-section3">
            <h3>Opening Hours</h3>
            <p>Monday- Thursday</p>
            <h5>10:00 AM - 11:00PM</h5>
            <p>Friday- Sunday</p>
            <h5>12:00 AM - 3:00AM</h5>
          </div>
        </div>
        <p className="copyrights">Copyright &copy; 2023 Yasodha Restaurant</p>
      </div>
    </>
  );
};

export default Footer;
