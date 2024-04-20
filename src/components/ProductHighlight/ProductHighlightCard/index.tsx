import { Title } from "../../Title";

import styles from "./styles.module.scss";

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
            <div>
                {title && (
                    <section className={styles.productInfos}>
                        <Title text={title} classProp="mediumTitle" />
                        <p>{description}</p>
                    </section>
                )}
                <a className={styles.btnWant}>
                    <p>{buttonText}</p>
                    <img src={buttonArrow} alt={buttonAlt} />
                </a>
            </div>
            <img src={productImg} alt={productImgAlt} />
        </article>
    );
};

export { ProductHighlightCard };
