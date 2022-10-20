import HomeFooter_Component from "./_footer";
import HomeHeader_Component from "./_header";

export default function Home() {
    return (
        <section className="home-page">
            <HomeHeader_Component />
            <HomeFooter_Component />
        </section>
    )
}
