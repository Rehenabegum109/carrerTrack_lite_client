import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";

import AddApplication from "../pages/Application/AddApplication";
import EditApplication from "../pages/Application/EditApplication";
import ApplicationDetails from "../pages/Application/ApplicationDetails";
import DeleteApplication from "../pages/Application/DeleteApplication";
import Profile from "../pages/Application/Profile";

import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivetRoute";
import About from "../pages/About";




export const router = createBrowserRouter([



  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [

      {
        index: true,
        element: <Home />,
      },


      {
        path: "login",
        element: <Login />,
      },


      {
        path: "register",
        element: <Register />,
      },
      {
        path:"about",
        element: <About/>
      }

    ],
  },





  
  {
    path: "/",
    element: <PrivateRoute />,

    children: [

      {
        element: <DashboardLayout />,

        children: [


          {
            path: "dashboard",
            element: <Dashboard />,
          },



          {
            path: "applications",
            element: <Applications />,
          },



          {
            path: "applications/new",
            element: <AddApplication />,
          },



          {
            path: "applications/:id",
            element: <ApplicationDetails />,
          },



          {
            path: "applications/edit/:id",
            element: <EditApplication />,
          },



          {
            path: "applications/delete/:id",
            element: <DeleteApplication />,
          },



          {
            path: "profile",
            element: <Profile />,
          },


        ],

      },

    ],
  },

]);