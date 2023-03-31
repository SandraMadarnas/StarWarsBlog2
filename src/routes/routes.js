import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../views/Home.jsx';
import Layout from '../layout/Layout.jsx';
import DetailedPlanet from '../views/DetailedPlanet.jsx';
import DetailedCharacter from '../views/DetailedCharacter.jsx';
import DetailedVehicle from '../views/DetailedVehicle.jsx';







const innerRoutes = [
    {
        path:"/",
        element:<Home/>
    },
    { 
        path:"/planetdetails/:planet",
        element: <DetailedPlanet />
    },
    {
        path:"/chardetails/:character",
        element: <DetailedCharacter />
    },
    {
        path:"/vehicledetails/:vehicle",
        element: <DetailedVehicle />
    }
];

const fullRoutes = [{
    path:'/',
    element: <Layout/>,
    children: innerRoutes
}];

const router = createBrowserRouter(fullRoutes)

export default router;


