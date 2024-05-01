import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Adopt from "./pages/Adopt.jsx";
import PetDetails from "./pages/PetDetails.jsx";
import React, { useState } from "react";
import Rehome from "./pages/Rehome.jsx";

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home setSelectedCity={setSelectedCity} setSelectedSpecies={setSelectedSpecies} />
        </>
      ),
    },
    {
      path: "/adopt",
      element: (
        <>
          <Navbar />
          <Adopt
            selectedSpecies={selectedSpecies}
            setSelectedSpecies={setSelectedSpecies}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </>
      ),
    },
    {
      path: "/pet/:id",
      element: (
        <>
          <Navbar />
          <PetDetails />
        </>
      ),
    },
    {
      path: "/rehome",
      element: (
        <>
          <Navbar />
          <Rehome />
        </>
      ),
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
