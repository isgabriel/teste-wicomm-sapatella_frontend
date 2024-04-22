import { NavbarData } from "../../../data/Navbar/navbar";

import styles from "./styles.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {NavbarData.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        <a href="#">{item}</a>
                    </li>
                ))}
                <li className={styles.listItem}>
                    <a href="#" className={styles.off}>
                        OFF
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };
