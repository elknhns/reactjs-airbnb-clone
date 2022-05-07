import React from "react";
import photoGrid from "../images/photo-grid.png";
import "../index.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photoGrid} alt="" />
      <div className="hero__text">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}
