import Buttons from "../../components/common/NavButtons";
import logo from '../../assets/icons/logo.svg'
import BurgerButton_Component from "../../components/shared/burger_btn";
export default function Navigation() {
    return (
        <nav className="navigation">
            <BurgerButton_Component />
            <img src={logo} className="logo" alt="logo" />
            <Buttons />
        </nav>
    )
}
