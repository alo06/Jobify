import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {HomeLayout,Landing,DashboardLayout,Register,Login,Admin,Error,Stats,AddJob,AllJobs,Profile,EditJob} from './pages/index'
import { action as registerAction} from './pages/Register';
import { action as loginAction} from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allJobsLoader } from './pages/AllJobs';
import { action as addJobAction } from './pages/AddJob';
import { loader as editJobLoader } from "./pages/EditJob";
import { action as ediJobAction } from './pages/EditJob';
import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats"; 

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: dashboardLoader,
        children: [
          { index: true, element: <AddJob />, action:addJobAction},
          {
            path: "admin",
            element: <Admin />,
            loader:adminLoader
          },
          {
            path: "stats",
            element: <Stats />,
            loader:statsLoader
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader:allJobsLoader
          },
          {
            path: "profile",
            element: <Profile />,
            action:profileAction
          },
          {
            path:"edit-job/:id",
            element:<EditJob/>,
            loader:editJobLoader,
            action:ediJobAction
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App