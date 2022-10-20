import FirstImg from '../../../../assets/Images/desktop-image-hero-1.jpg'
import SecondImg from '../../../../assets/Images/desktop-image-hero-2.jpg'
import ThirdImg from '../../../../assets/Images/desktop-image-hero-3.jpg'
import { useAppSelector } from '../../../../services/ReduxHooks/ReduxHooks'

export default function HomeImgSide_Component() {
    const index = useAppSelector(state => state.index.value)
    return (
        <img src={index === 0 ? FirstImg : "" || index === 1 ? SecondImg : "" || index === 2 ? ThirdImg : ""}
            className="home-img-side-component" alt="product image" />
    )
}
