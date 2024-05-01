import React, { useRef } from "react";
import Multiselect from "multiselect-react-dropdown";

import "./index.css";

import { CITIES } from "../../assets/cities";

const SideFilter = ({ setSelectedSpecies, setSelectedCity }) => {
  const speciesOptions = [
    { species: "Dog", id: 1 },
    { species: "Cat", id: 2 },
    { species: "Others", id: 3 },
  ];

  const speciesRef = useRef(null);
  const cityRef = useRef(null);

  const onSelectSpecies = (selectedItem) => {
    setSelectedSpecies(selectedItem[0]?.species);
  };

  const onSelectCity = (selectedItem) => {
    setSelectedCity(selectedItem[0]?.name);
  };

  const handleCityRemove = () => {
    setSelectedCity(null);
  };

  const handleResetFilters = () => {
    setSelectedSpecies(null);
    setSelectedCity(null);
    speciesRef.current.resetSelectedValues();
    cityRef.current.resetSelectedValues();
  };

  return (
    <div className="filters-section">
      <h5>Select Pet Type</h5>
      <Multiselect
        ref={speciesRef}
        options={speciesOptions}
        displayValue="species"
        placeholder="Select Pet Type.."
        singleSelect
        onSelect={onSelectSpecies}
        avoidHighlightFirstOption
        className="pet-adoption-filters"
        style={{
          multiselectContainer: {
            backgroundColor: "white",
            borderRadius: "10px",
          },
          chips: {
            fontSize: "20px",
            height: "40px",
          },
          inputField: {
            height: "40px",
            paddingLeft: "10px",
          },
          searchBox: {
            border: "2px solid rgb(139, 111, 57)",
            borderRadius: "10px",
          },
        }}
      />
      <h5>Search by City</h5>
      <Multiselect
        ref={cityRef}
        options={CITIES}
        displayValue="name"
        placeholder="Search by City.."
        groupBy="state"
        selectionLimit={1}
        onSelect={onSelectCity}
        showArrow
        className="pet-adoption-filters"
        avoidHighlightFirstOption
        hidePlaceholder
        onRemove={handleCityRemove}
        style={{
          multiselectContainer: {
            backgroundColor: "white",
            borderRadius: "10px",
          },
          chips: {
            background: "rgb(139, 111, 57)",
            height: "40px",
          },
          inputField: {
            height: "40px",
            paddingLeft: "10px",
          },
          searchBox: {
            border: "2px solid rgb(139, 111, 57)",
            borderRadius: "10px",
          },
          groupHeading: {
            background: "rgba(139, 111, 57, 0.5)",
            color: "black",
          },
        }}
      />
      <button onClick={handleResetFilters} className="filters-reset-button">Reset Filters</button>
    </div>
  );
};

export default SideFilter;
