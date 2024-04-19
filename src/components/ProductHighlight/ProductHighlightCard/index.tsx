import styles from "./styles.module.scss";
import { Title } from "../../Title";

interface ProductHighlightCardProps {
    title?: string;
    description?: string;
    buttonText: string;
    buttonArrow: string;
    buttonAlt: string;
    productImg: string;
    productImgAlt: string;
    classProp: string;
}

const ProductHighlightCard = ({
    title,
    description,
    buttonText,
    buttonArrow,
    buttonAlt,
    productImg,
    productImgAlt,
    classProp,
}: ProductHighlightCardProps) => {
    return (
        <article className={styles[classProp]}>
            {title && (
                <div>
                    <Title text={title} classProp="titleProdHighlight" />
                    <p>{description}</p>
                </div>
            )}
            <div>
                <p>{buttonText}</p>
                <img src={buttonArrow} alt={buttonAlt} />
            </div>
            <img src={productImg} alt={productImgAlt} />
        </article>
    );
};

export { ProductHighlightCard };
