import { CategoriesData } from "../../data/Categories/categories";
import { Title } from "../Title";
import { CategoryCard } from "./CategoryCard";

const Categories = () => {
    return (
        <section>
            <Title text="Compre por categoria" classProp="" />
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
