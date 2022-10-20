import HomeContentSide_Component from "../../components/shared/_home_page_header_components/_content_side";
import HomeImgSide_Component from "../../components/shared/_home_page_header_components/_img_side";

export default function HomeHeader_Component() {
    return (
        <section className='home-header-component'>
            <HomeImgSide_Component />
            <HomeContentSide_Component />
        </section>
    )
}
