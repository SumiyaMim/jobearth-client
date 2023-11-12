import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddJob from "../pages/AddJob";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import MyPostedJobs from "../pages/MyPostedJobs";
import JobDetails from "../pages/JobDetails";
import UpdateJob from "../pages/UpdateJob";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },   
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },   
            {
                path: '/job-details/:id', 
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://jobearth-server.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },  
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }   
        ]
    },
    {
        path: '/',
        element: <Root />,
        errorElement: <Error/>,
        children: [
            {
                path: '/user/my-profile',
                element: <PrivateRoute><MyProfile /></PrivateRoute>,
            },
            {
                path: '/user/my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>,
            },
            {
                path: '/user/update-job/:id',
                element: <PrivateRoute><UpdateJob /></PrivateRoute>,
                loader: ({params}) => fetch(`https://jobearth-server.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/user/my-bids',
                element: <PrivateRoute><MyBids /></PrivateRoute>,
            },
            {
                path: '/user/bid-requests',
                element: <PrivateRoute><BidRequests /></PrivateRoute>,
            },
        ]
    },    
])

export default router;
