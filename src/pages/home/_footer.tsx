import firstImg from '../../assets/Images/image-about-dark.jpg'
import secondImg from '../../assets/Images/image-about-light.jpg'
import FooterContent_Component from '../../components/shared/_home_page_footer_components/_footer_content'
export default function HomeFooter_Component() {
    return (
        <section className="home-footer-component">
            <img src={firstImg} className="about-img" alt="about image" />
            <FooterContent_Component />
            <img src={secondImg} className="about-img" alt="about image" />
        </section>
    )
}
