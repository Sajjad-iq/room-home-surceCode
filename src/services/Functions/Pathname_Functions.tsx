import { useLocation } from "react-router-dom";

export const Functions = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const Links = ["room-home", "shop", "about", "contact"]

    return { splitLocation, Links }
}