import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import AdoptCard from "../components/AdoptCard";
import Skeleton from "@mui/material/Skeleton";
import SideFilter from "../components/SideFilter";

const Adopt = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pets");
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pet-adopt-container">
      <aside className="pet-adopt-aside">
        <SideFilter />
      </aside>
      <section className="pet-adopt-section">
        {loading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={240}
            height={280}
          />
        ) : (
          data.map((item) => (
            <AdoptCard key={item._id} cardConfig={item} isLoading={loading} />
          ))
        )}
      </section>
    </div>
  );
};

export default Adopt;
