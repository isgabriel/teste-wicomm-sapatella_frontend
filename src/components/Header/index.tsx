import { Input } from "../Input";
import { Logo } from "../Logo";
import { Icons } from "./Icons";
import { Navbar } from "./Navbar";

const Header = () => {
    return (
        <header>
            <Logo src="assets/logo/logoWhite.svg" alt="logo branca" />
            <Navbar />
            <div>
                <Input
                    classProp="inputHeader"
                    type="text"
                    placeholderProp="Buscar"
                />
                <button>
                    <img src="assets/icons/header/searchIcon.svg" alt="" />
                </button>
            </div>
            <Icons />
        </header>
    );
};
export { Header };
