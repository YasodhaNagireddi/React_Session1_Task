import React from "react";
import "../CSS/Services.css";

const Services = () => {
  return (
    <>
      <div className="services-heading">
        <h2>Our Services</h2>
        <h1>
          We Provide Good Services With Lots <br />
          of Facilities
        </h1>
      </div>
      <div className="service-card-container">
        <div className="section-1">
          <div class="service-card">
            <img
              src="https://img.icons8.com/?size=64&id=49052&format=png"
              alt=" Fresh Food"
            />
            <h3>Fresh Food</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="service-card">
            <img
              src="https://img.icons8.com/?size=50&id=7621&format=png"
              alt="Quality Cuisine"
            />
            <h3>Quality Cuisine</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="service-card">
            <img
              src="https://img.icons8.com/?size=80&id=112128&format=png"
              alt="Pancake"
            />
            <h3>Bread & Pancake</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div className="section-2">
          <div class="service-card">
            <img
              src="https://img.icons8.com/?size=50&id=56700&format=png"
              alt=" Fresh Vegies Salad"
            />
            <h3>Fresh Vegies Salad</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="service-card">
            <img
              src="https://img.icons8.com/?size=50&id=24686&format=png"
              alt="Event Management"
            />
            <h3>Event Management</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="service-card">
            <img
              src="https://img.icons8.com/?size=80&id=65014&format=png"
              alt=" Reserve Now"
            />
            <h3>Reserve Now</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
