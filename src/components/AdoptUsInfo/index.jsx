import React from "react";
import "./index.css";

export const AdoptUsInfo = () => {
  return (
    <>
      <h1>Reasons to Adopt a Pet</h1>
      <div className="adopt-us-container">
        <aside className="adopt-us-aside">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dyrv985gb/image/upload/v1714790328/images/ufegocggm4z6audqr00e.svg"
              alt="svg"
            />
            <img
              className="overlay-image"
              src="https://res.cloudinary.com/dyrv985gb/image/upload/v1714749598/images/fo7ggnhat0gvrhll2p9l.png"
              alt="dog"
            />
          </div>
        </aside>
        <section className="why-to-adopt-container">
          <div className="item-container">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/dyrv985gb/image/upload/v1714884263/images/wrrrfgxhhzbhqi5aj0zy.png"
                alt="icon"
              />
            </div>
            <div className="description">
              <div className="title">Save Lives</div>
              <span>
                Adoption gives shelter animals a chance at a loving home,
                reducing euthanasia rates.
              </span>
            </div>
          </div>
          <div className="item-container">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/dyrv985gb/image/upload/v1714885614/images/vj0rsxpxpzycoxc1mqoq.png"
                alt="icon"
              />
            </div>
            <div className="description">
              <div className="title">Emotional Well-being</div>
              <span>
                Pets offer companionship, reduce stress, and provide
                unconditional love.
              </span>
            </div>
          </div>
          <div className="item-container">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/dyrv985gb/image/upload/v1714886037/images/ws3mkok08wfh8klzvazz.png"
                alt="icon"
              />
            </div>
            <div className="description">
              <div className="title">Health Benefits</div>
              <span>
                Having a pet has been linked to improved physical health,
                including lower blood pressure and decreased risk of heart
                disease, due to increased physical activity and companionship.
              </span>
            </div>
          </div>
          <div className="item-container">
            <div className="icon-container">
              <img
                src="https://res.cloudinary.com/dyrv985gb/image/upload/v1714886347/images/t6gvf7o9ypovhy1q1ikf.png"
                alt="icon"
              />
            </div>
            <div className="description">
              <div className="title">Unleash Fun and Adventure</div>
              <span>
                Adopting a pet brings joy and spontaneity into your life, as
                pets are always up for playtime, walks, and exploring new
                experiences with you, adding excitement and laughter to your
                everyday routine.
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdoptUsInfo;
