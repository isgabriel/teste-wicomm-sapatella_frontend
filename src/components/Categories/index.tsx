import { CategoriesData } from "../../data/Categories/categories";
import { Title } from "../Title";
import { CategoryCard } from "./CategoryCard";

import styles from "./styles.module.scss";

const Categories = () => {
    return (
        <section className={styles.categoriesContainer}>
            <Title text="Compre por categoria" classProp="bigTitle" />
            <div></div>
            <article>
                {CategoriesData.map((category, index) => (
                    <CategoryCard
                        key={index}
                        name={category.name}
                        imageSrc={category.image}
                        imageAlt={category.imgAlt}
                    />
                ))}
            </article>
        </section>
    );
};

export { Categories };
