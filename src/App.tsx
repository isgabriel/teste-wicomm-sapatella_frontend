import { AboutSection } from "./components/AboutSection";
import { BannerCarousel } from "./components/BannerCarousel";
import { Categories } from "./components/Categories";
import { FavoriteProducts } from "./components/FavoriteProducts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageSection } from "./components/ImageSection";
import { MultiItemCarousel } from "./components/MultiItemsCarousel";
import { PaymentItems } from "./components/PaymentItems";
import { ProductHighlight } from "./components/ProductHighlight";
import { RegisterSection } from "./components/RegisterSection";
import { SmallProductsSection } from "./components/SmallProductsSection";

import "./styles/globals.scss";

function App() {
    return (
        <>
            <Header />
            <main>
                <BannerCarousel />
                <PaymentItems />
                <Categories />
                <MultiItemCarousel />
                <FavoriteProducts
                    props={{
                        title: "Favoritos da Semana",
                        totalSlides: 12,
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                    }}
                />
                <ProductHighlight />
                <SmallProductsSection />
                <ImageSection />
                <AboutSection />
                <RegisterSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
