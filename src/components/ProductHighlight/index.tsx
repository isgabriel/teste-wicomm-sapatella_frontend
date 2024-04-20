import { SandalsData } from "../../data/Sandals/sandals";
import { ProductHighlightCard } from "./ProductHighlightCard";

import styles from "./styles.module.scss";

const ProductHighlight = () => {
    return (
        <section className={styles.container}>
            {SandalsData.map((sandal, index) => (
                <ProductHighlightCard
                    key={index}
                    title={sandal.cardTitle}
                    description={sandal.cardDescription}
                    buttonText={sandal.cardButtonText}
                    buttonArrow={sandal.cardButtonImg}
                    buttonAlt={sandal.cardButtonImgAlt}
                    productImg={sandal.cardImage}
                    productImgAlt={sandal.cardImageAlt}
                    classProp={sandal.classProp}
                />
            ))}
        </section>
    );
};

export { ProductHighlight };
