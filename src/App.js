import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Adopt from './pages/Adopt.jsx';
import PetDetails from './pages/PetDetails.jsx';
import React, {useState} from 'react';
import Rehome from './pages/Rehome.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/adopt",
      element: <><Navbar /><Adopt /></>
    },
    {
      path: "/pet/:id",
      element: <><Navbar /><PetDetails /></>
    },
    {
      path: "/rehome",
      element: <><Navbar /><Rehome /></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
