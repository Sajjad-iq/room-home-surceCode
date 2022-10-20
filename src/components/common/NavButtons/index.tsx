import { Link } from "react-router-dom";
import { Functions } from "../../../services/Functions/Pathname_Functions";

export default function Buttons() {
    const { splitLocation, Links } = Functions()
    return (
        <section className="buttons-component">
            {Links.map((e) => {
                return <Link
                    to={e}
                    className={splitLocation[1] === e ? "nav-button Active" : "nav-button"}
                    key={e}
                >{e === "room-home" ? "home" : e}</Link>
            })}
        </section>
    )
}
