import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PaymentItems } from "./components/PaymentItems";

function App() {
    return (
        <>
            <Header />
            <main>
                <PaymentItems />
                <Categories />
            </main>
        </>
    );
}

export default App;
