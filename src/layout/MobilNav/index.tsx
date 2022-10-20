import Buttons from "../../components/common/NavButtons";
import Functions from "../../services/Functions/isMobil_Nav_Active_Functions";
import CloseButton from "./_close_button";

export default function MobilNav() {
    const { isMobil_Nav_Active } = Functions()
    return (
        <section className={isMobil_Nav_Active === true ? "mobil-nav-bar-component Show" : "mobil-nav-bar-component"} >
            <Buttons />
            <CloseButton />
        </section>
    )
}
