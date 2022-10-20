import ArrowIcon from '../../../../assets/icons/icon-arrow.svg'

export default function ShopNowButton() {
    return (
        <button className='shop-now-btn'>{"SHOP NOW"} <img className='arrow-icon' src={ArrowIcon} /></button>
    )
}
