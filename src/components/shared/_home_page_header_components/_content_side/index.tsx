import { useAppSelector } from '../../../../services/ReduxHooks/ReduxHooks'
import { StockData } from '../../../../data/StockData'
import ShopNowButton from './_shopNow_btn'
import AsideButtons_Component from '../../../common/AsideButtons'
export default function HomeContentSide_Component() {
    const index = useAppSelector(state => state.index.value)
    return (
        <section className="home-content-side-component">
            <article className='home-content-side-component-wrapper'>
                <h1 className='header'>{StockData.homePage[index].header}</h1>
                <p className='body'>{StockData.homePage[index].body}</p>
                <ShopNowButton />
            </article>
            <AsideButtons_Component />
        </section>
    )
}
