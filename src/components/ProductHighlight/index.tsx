import { SandalsData } from "../../data/Sandals/sandals";
import { ProductHighlightCard } from "./ProductHighlightCard";

const ProductHighlight = () => {
    return (
        <section>
            <ul>
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
            </ul>
        </section>
    );
};

export { ProductHighlight };
