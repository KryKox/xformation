import {FaHouse, FaInbox, FaInstagram} from "react-icons/fa6";
import {FaArrowAltCircleLeft, FaSearch, FaUser} from "react-icons/fa";

const navElements = [
    {
        path: "/",
        content: "Homepage",
        icon: <FaHouse />
    },
    {
        path: "/register",
        content: "Sign-up",
        icon: <FaUser />
    },
    {
        path: "/login",
        content: "Sign-in",
        icon: <FaArrowAltCircleLeft />
    }
];

const iconsInformation = [
    {
        path: "/search",
        icon: <FaSearch />
    },
    {
        path: "/mail",
        icon: <FaInbox />
    },
    {
        path: "/instagram",
        icon: <FaInstagram />
    }
];

export {
    navElements,
    iconsInformation
}