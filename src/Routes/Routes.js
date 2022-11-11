import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails/ServiceDetails";
import ServicesCard from "../Pages/Home/Services/ServicesCard/ServicesCard";
import ReviewForm from "../Pages/ReviewForm/ReviewForm";
import SignIn from "../Shared/SignIn/SignIn";
import SignUp from "../Shared/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services/',
                element: <AllServices></AllServices>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://denti-care-server-94gkl1s2m-xbayazid.vercel.app/services/${params.id}`)
            }, 
            {
                path: '/reviews',
                element: <PrivateRoutes><ReviewForm></ReviewForm></PrivateRoutes>
            }, 
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router