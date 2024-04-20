import { AboutSection } from "./components/AboutSection";
import { BannerCarousel } from "./components/BannerCarousel";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageSection } from "./components/ImageSection";
// import { Modal } from "./components/Modal";
import { PaymentItems } from "./components/PaymentItems";
import { ProductHighlight } from "./components/ProductHighlight";
import { RegisterSection } from "./components/RegisterSection";

import "./styles/globals.scss";

function App() {
    return (
        <>
            <Header />
            <main>
                <BannerCarousel />
                {/* <Modal /> */}
                <PaymentItems />
                <Categories />
                <ProductHighlight />
                <ImageSection />
                <AboutSection />
                <RegisterSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
