import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home';
import Adopt from './components/Adopt';

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
