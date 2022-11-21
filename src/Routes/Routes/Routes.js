import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Allusers from "../../Pages/AllUsers/Allusers";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/DashBoard/MyApointment/MyAppointment";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivaeRoutes from "../PrivayeRoutes/PrivaeRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivaeRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivaeRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
