import Functions from "../../../services/Functions/Increment_&_Decrement_Functions"
import '../../../assets/Styles/components/common/AsideButtons/index.css'
export default function AsideButtons_Component() {
    const { Increment, Decrement } = Functions()

    return (
        <section className="aside-buttons-component">
            <button onClick={() => Decrement()} className='aside-buttons'>{"<"}</button>
            <button onClick={() => Increment()} className='aside-buttons'>{">"}</button>
        </section>
    )
}
