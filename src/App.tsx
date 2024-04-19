import { AboutSection } from "./components/AboutSection";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { ImageSection } from "./components/ImageSection";
import { PaymentItems } from "./components/PaymentItems";
import { ProductHighlight } from "./components/ProductHighlight";
import { RegisterSection } from "./components/RegisterSection";

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
                <RegisterSection />
            </main>
        </>
    );
}

export default App;
