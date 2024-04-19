import { NavbarData } from "../../../data/Navbar/navbar";

const Navbar = () => {
    return (
        <nav>
            <ul>
                {NavbarData.map((item, index) => (
                    <li key={index}>
                        <a href="/">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export { Navbar };
