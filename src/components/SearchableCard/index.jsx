import React from "react";
import "./index.css";

const SearchableCard = () => {
  const cardsConfig = [
    {
      cardLabel: "Dogs",
      cardIcon: "https://res.cloudinary.com/dyrv985gb/image/upload/v1713149447/images/dog-card.png",
      cardCTA: "",
    },
    {
      cardLabel: "Cats",
      cardIcon: "https://res.cloudinary.com/dyrv985gb/image/upload/v1713149092/images/cat-card.png",
      cardCTA: "",
    },
    {
      cardLabel: "Other Animals",
      cardIcon: "https://res.cloudinary.com/dyrv985gb/image/upload/v1713149864/images/other-animals-card.png",
      cardCTA: "",
    },
  ];
  return (
    <>
      <div className="searchableCardContainer">
        <ul className="searchableCardsList">
          {cardsConfig.map((cardConfig, index) => (
            <li key={index} className="searchableCard">
              <a href={cardConfig?.cardCTA}>
                <img src={cardConfig?.cardIcon} alt={cardConfig?.cardLabel} />
                <span>{cardConfig?.cardLabel}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchableCard;
