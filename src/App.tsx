import { AboutSection } from "./components/AboutSection";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { ImageSection } from "./components/ImageSection";
import { PaymentItems } from "./components/PaymentItems";
import { ProductHighlight } from "./components/ProductHighlight";

function App() {
    return (
        <>
            <Header />
            <main>
                <PaymentItems />
                <Categories />
                <ProductHighlight />
                <ImageSection />
                <AboutSection />
            </main>
        </>
    );
}

export default App;
