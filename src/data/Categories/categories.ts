interface CategoryItem {
    image: string;
    imgAlt: string;
    name: string;
}

interface CategoriesInterface {
    title: string;
    items: CategoryItem[];
}

const CategoriesData: CategoriesInterface = {
    title: "Compre por categoria",
    items: [
        { image: "", imgAlt: "", name: "Bolsas" },
        { image: "", imgAlt: "", name: "Tênis" },
        { image: "", imgAlt: "", name: "Rasteiras" },
        { image: "", imgAlt: "", name: "Plataformas" },
        { image: "", imgAlt: "", name: "Botas" },
        { image: "", imgAlt: "", name: "Sapatilhas" },
    ],
};

export { CategoriesData };
