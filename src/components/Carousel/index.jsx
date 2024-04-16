import React from "react";
import { Typewriter } from "react-simple-typewriter";

import './index.css';

const Carousel = () => {
    return (
        <>
        <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-fade main-carousel"
        data-bs-ride="carousel"
      >
        <h1 className="overlay-text">
          We also need{" "}
          <span>
            <Typewriter
              words={["Home", "Love", "Care"]}
              loop={"false "}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <div className="carousel-inner carousel-background">
          <div
            className="carousel-item active carousel-home"
            data-bs-interval="7000"
          >
            <img
              src="https://res.cloudinary.com/dyrv985gb/image/upload/v1713074531/images/dog1.jpg"
              className="d-block w-100"
              alt="dog1"
            />
          </div>
          <div className="carousel-item carousel-home" data-bs-interval="7000">
            <img
              src="https://res.cloudinary.com/dyrv985gb/image/upload/v1713074531/images/dog2.jpg"
              className="d-block w-100"
              alt="dog2"
            />
          </div>
          <div className="carousel-item carousel-home" data-bs-interval="7000">
            <img
              src="https://res.cloudinary.com/dyrv985gb/image/upload/v1713095427/images/cat.jpg"
              className="d-block w-100"
              alt="cat"
            />
          </div>
        </div>
      </div>
        </>
    )
};

export default Carousel;