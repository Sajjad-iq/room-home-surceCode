import Functions from "../../services/Functions/isMobil_Nav_Active_Functions"

export default function CloseButton() {
    const { Toggle } = Functions()
    return (
        <button className='close-button-component'
            onClick={Toggle}
        >X</button>
    )
}
