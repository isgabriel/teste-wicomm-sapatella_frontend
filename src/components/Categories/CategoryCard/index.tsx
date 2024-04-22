interface CategoryCardProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
}

import styles from "./styles.module.scss";

const CategoryCard = ({ imageSrc, imageAlt, name }: CategoryCardProps) => {
    return (
        <a href="#" className={styles.categoryCardContainer}>
            <img src={imageSrc} alt={imageAlt} />
            <p>{name}</p>
        </a>
    );
};

export { CategoryCard };
