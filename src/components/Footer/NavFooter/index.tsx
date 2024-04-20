interface NavFooterProps {
    title: string;
    navItems: string[];
}

import { Title } from "../../Title";

import styles from "./styles.module.scss";

const NavFooter = ({ title, navItems }: NavFooterProps) => {
    return (
        <div className={styles.container}>
            <Title classProp="smallTitle" text={title} />
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { NavFooter };
