import React, { Children } from "react";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Nav from './components/Nav/Navbar';
import HomePage from './pages/HomePage';
import WorkshopPage from './pages/WorkshopPage';
import NewWorkshopPage from "./pages/NewWorkshop";


const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />

    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/workshop-form',
        element: <NewWorkshopPage />
      },
      {
        path: '/workshops',
        element: <WorkshopPage />
      },

    ],
  },
]);

function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App