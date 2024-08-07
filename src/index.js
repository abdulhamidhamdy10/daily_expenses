// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

  Link,
} from "react-router-dom";
import App from "./App";
// import Allclubkitspages from "./Clubkitspage/Allclubkitspages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  // {
  //   path: "/Allclubkitspages",
  //   element: <Allclubkitspages/> ,
  // },
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

