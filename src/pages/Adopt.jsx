import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import AdoptCard from "../components/AdoptCard";
import Skeleton from "@mui/material/Skeleton";
import SideFilter from "../components/SideFilter";

const Adopt = ({
  selectedSpecies,
  selectedCity,
  setSelectedSpecies,
  setSelectedCity,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let url = "http://localhost:5000/api/pets";

      const queryParams = [];

      if (selectedSpecies) {
        queryParams.push(`species=${selectedSpecies}`);
      }

      if (selectedCity) {
        console.log({selectedCity});
        queryParams.push(`location=${selectedCity}`);
      }

      if (queryParams.length > 0) {
        url += `?${queryParams.join("&")}`;
      }
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedCity, selectedSpecies]);

  return (
    <div className="pet-adopt-container">
      <aside className="pet-adopt-aside">
        <SideFilter
          setSelectedSpecies={setSelectedSpecies}
          setSelectedCity={setSelectedCity}
        />
      </aside>
      <section className="pet-adopt-section">
        {loading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={240}
            height={280}
          />
        ) : error ? (
          <div>Error fetching data: {error}</div>
        ) : (
          data.map((item) => <AdoptCard key={item._id} cardConfig={item} />)
        )}
      </section>
    </div>
  );
};

export default Adopt;
