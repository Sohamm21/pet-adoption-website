import React, { useEffect, useState } from "react";
import PetDetailCarousel from "../components/PetDetailCarousel/index.jsx";

const PetDetails = () => {
  const [petDetail, setPetDetail] = useState(null);

  useEffect(() => {
    // Fetch data from local storage
    const storedData = localStorage.getItem("petDetail");
    if (storedData) {
      // Parse the JSON string back into an object
      setPetDetail(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      {petDetail && (
        <>
          <PetDetailCarousel photos={petDetail.photos} />
          <h1>{petDetail.name}</h1>
        </>
      )}
    </>
  );
};

export default PetDetails;
