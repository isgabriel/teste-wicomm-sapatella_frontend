import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { ImageSection } from "./components/ImageSection";
import { PaymentItems } from "./components/PaymentItems";

function App() {
    return (
        <>
            <Header />
            <main>
                <PaymentItems />
                <Categories />
                <ImageSection />
            </main>
        </>
    );
}

export default App;
