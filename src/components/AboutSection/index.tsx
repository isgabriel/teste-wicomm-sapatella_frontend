import { AboutData } from "../../data/About/about";
import { Title } from "../Title";

import styles from "./styles.module.scss";

const AboutSection = () => {
    return (
        <section className={styles.aboutContainer}>
            {AboutData.map((item, index) => (
                <div key={index}>
                    <div>
                        <Title classProp="bigTitle" text={item.title} />
                        <p>{item.description}</p>
                    </div>
                    <img src={item.image} alt={item.imageAlt} />
                </div>
            ))}

            <img src="" alt="" />
        </section>
    );
};

export { AboutSection };
