import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import SearchableCard from "../components/SearchableCard/index.jsx";
import AdoptUsInfo from "../components/AdoptUsInfo/index.jsx";

const Home = ({setSelectedCity, setSelectedSpecies}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  setSelectedCity('');
  setSelectedSpecies('');
  return (
    <>
      <Carousel />
      <SearchableCard setSelectedSpecies={setSelectedSpecies} />
      <AdoptUsInfo />
    </>
  );
};

export default Home;
