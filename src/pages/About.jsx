import React from "react";
import "./About.css";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.jpeg";
function About() {
  return (
    <div className="About-parent">
      <div className="About-child">
        <div className="About-child1">
          <h1>Welcome To BookManagementSystem </h1>
          <img src={image4} alt="" id="About-child1-first-image" />
          <img src={image3} alt="" />
        </div>

        <div className="About-child2">
          <h5>
            About MyBookApp Welcome to MyBookApp — your personal digital
            bookshelf and reading companion, crafted with passion for readers of
            all kinds. Whether you're an avid bibliophile, a student managing
            your study materials, or someone rediscovering the joy of reading,
            MyBookApp is designed to simplify how you interact with books in the
            digital world.
          </h5>

          <ul>
            <li>
              <h6>Mission:</h6>
              <p>
                BMS aims to connect Authors with other authors and connect with each other.{" "}
              </p>
            </li>
            <li>
              <h6>Platform Features:</h6>
              <p>
                BMS allows users to search for books and create a new book, read
                and write reviews, view photos, liked their contents, puchased it, and
                make payments, according to BookManagementSystem.{" "}
              </p>
            </li>
            <li>
              <h6>Business Model:</h6>
              <p>
                BMS connects Users, Authors, and content readers,
                offering various services like online book ordering, reading, and
                purchasing books, as described in the BMS business model.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;