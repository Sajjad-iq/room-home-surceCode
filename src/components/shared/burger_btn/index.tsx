import burgerIcon from '../../../assets/icons/icon-hamburger.svg'
import Functions from '../../../services/Functions/isMobil_Nav_Active_Functions'

export default function BurgerButton_Component() {
    const { isMobil_Nav_Active, Toggle } = Functions()
    return (
        <button
            onClick={Toggle}
            className={isMobil_Nav_Active === true ? 'burger-button-component Hide' : 'burger-button-component'}>
            <img src={burgerIcon} className='burger-icon' alt='icon' />
        </button>
    )
}
