import React from "react";
import heroImg from "../../../public/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search border-warning">
              <input type="text" placeholder="Search" className="rounded-pill" />
              <button className="btn btn-warning rounded-pill">Search</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
