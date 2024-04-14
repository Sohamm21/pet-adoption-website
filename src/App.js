import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Adopt from './pages/Adopt.jsx';

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
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
