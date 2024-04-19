import { CategoriesData } from "../../data/Categories/categories";
import { CategoryCard } from "./CategoryCard";

const Categories = () => {
    return (
        <ul>
            {CategoriesData.map((category, index) => (
                <CategoryCard
                    key={index}
                    name={category.name}
                    imageSrc={category.image}
                    imageAlt={category.imgAlt}
                />
            ))}
        </ul>
    );
};

export { Categories };
