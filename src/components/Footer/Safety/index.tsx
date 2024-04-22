import { Title } from "../../Title";

interface SafetyDataProps {
    image: string;
    imageAlt: string;
}

import styles from "./styles.module.scss";

const Safety = ({ safetyData }: { safetyData: SafetyDataProps[] }) => {
    return (
        <div className={styles.container}>
            <Title classProp="smallTitle" text="SEGURANÇA" />
            <ul>
                {safetyData.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt={item.imageAlt} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Safety };
