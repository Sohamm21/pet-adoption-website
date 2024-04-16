import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";

const AdoptCard = ({ cardConfig, isLoading, setPetDetail }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/pets/${cardConfig._id}`);
      localStorage.setItem('petDetail', JSON.stringify(response.data));
      navigate(`/pet/${cardConfig._id}`);
    } catch (error) {
      console.error("Error fetching pet details:", error.message);
    }
  };
  
  

  return (
    <>
      <div key={cardConfig?._id} className="pet-adopt-card" onClick={handleOnClick}>
        <img src={cardConfig?.photos[0]} alt={cardConfig?.name} />
        <span className="pet-adopt-card-other-details">
          <span className="pet-adopt-card-name">{cardConfig?.name}</span>
          <span>{`Posted On: ${formatDate(cardConfig?.dateAdded)}`}</span>
          <span>{cardConfig?.location && `${cardConfig.location}`}</span>
        </span>
      </div>
    </>
  );
};

export default AdoptCard;
