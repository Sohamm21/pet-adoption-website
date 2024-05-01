import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const SearchableCard = ({ setSelectedSpecies }) => {
  const cardsConfig = [
    {
      cardLabel: "Dogs",
      cardIcon: "https://res.cloudinary.com/dyrv985gb/image/upload/v1713149447/images/dog-card.png",
      species: "Dog",
    },
    {
      cardLabel: "Cats",
      cardIcon: "https://res.cloudinary.com/dyrv985gb/image/upload/v1713149092/images/cat-card.png",
      species: "Cat",
    },
    {
      cardLabel: "Other Animals",
      cardIcon: "https://res.cloudinary.com/dyrv985gb/image/upload/v1713149864/images/other-animals-card.png",
      species: "Others",
    },
  ];

  const handleCardClick = (species) => {
    setSelectedSpecies(species);
  };

  return (
    <div className="searchableCardContainer">
      <ul className="searchableCardsList">
        {cardsConfig.map((cardConfig, index) => (
          <li key={index} className="searchableCard">
            <NavLink
              to={`/adopt?species=${encodeURIComponent(cardConfig.species)}`}
              activeClassName="active"
              onClick={() => handleCardClick(cardConfig.species)}
            >
              <img src={cardConfig.cardIcon} alt={cardConfig.cardLabel} />
              <span>{cardConfig.cardLabel}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableCard;
