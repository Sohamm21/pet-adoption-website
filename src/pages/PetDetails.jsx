import React, { useEffect, useState } from "react";
import PetDetailCarousel from "../components/PetDetailCarousel/index.jsx";

const PetDetails = () => {
  const [petDetail, setPetDetail] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("petDetail");
    if (storedData) {
      setPetDetail(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      {petDetail && (
        <>
          <div className="pet-details-info">
            <div className="carousel-container">
              <PetDetailCarousel photos={petDetail.photos} />
            </div>
            <div className="details-container">
              <h1>{petDetail.name}</h1>
              <span>{petDetail?.breed && <>{petDetail.breed} • </>} {petDetail?.location}</span>
              <hr className="horizontal-line"/>
              <div className="details-column">
                {petDetail?.age ? <span>{`Age: ${petDetail.age}`}</span> : null}
                {petDetail?.gender && <span>{`Gender: ${petDetail.gender}`}</span>}
                {petDetail?.description && <span>{`Description: ${petDetail.description}`}</span>}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PetDetails;
