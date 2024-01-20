import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../component/Main.js"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
        
      { path: "/", element: <Navigate to="/starter" replace/> }

    ],
  },
];

export default ThemeRoutes;
