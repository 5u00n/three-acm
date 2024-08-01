import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import NotFound from "../Pages/NotFound";
import ServerError from "../Pages/ServerError";
import Projects from "../Pages/Projects";
import Project from "../Pages/Project";
import MissionTrips from "../Pages/MissionTrips";
import MissionTrip from "../Pages/MissionTrip";
import Volunteers from "../Pages/Volunteers";
import Volunteer from "../Pages/Volunteer";
import Donors from "../Pages/Donors";
import Donor from "../Pages/Donor";
import Donations from "../Pages/Donations";
import Donation from "../Pages/Donation";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/about-us", component: <About /> },
    { path: "/contact", component: <Contact /> },
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
    { path: "/forgot-password", component: <ForgotPassword /> },
    { path: "/reset-password", component: <ResetPassword /> },
    { path: "/404", component: <NotFound /> },
    { path: "/500", component: <ServerError /> },
    { path: "*", component: <NotFound /> },
    { path: "/projects", component: <Projects /> },
    { path: "/projects/:id", component: <Project /> },
    { path: "/mission-trips", component: <MissionTrips /> },
    { path: "/mission-trips/:id", component: <MissionTrip /> },
    { path: "/volunteers", component: <Volunteers /> },
    { path: "/volunteers/:id", component: <Volunteer /> },
    { path: "/donors", component: <Donors /> },
    { path: "/donors/:id", component: <Donor /> },
    { path: "/donations", component: <Donations /> },
    { path: "/donations/:id", component: <Donation /> },

];


export { publicRoutes };