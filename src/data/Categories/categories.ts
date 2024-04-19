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
        {
            image: "assets/images/categories/bolsas.svg",
            imgAlt: "imagem de bolsa",
            name: "Bolsas",
        },
        {
            image: "assets/images/categories/tenis.svg",
            imgAlt: "imagem de tenis",
            name: "Tênis",
        },
        {
            image: "assets/images/categories/rasteiras.svg",
            imgAlt: "imagem de sandália rasteira",
            name: "Rasteiras",
        },
        {
            image: "assets/images/categories/plataformas.svg",
            imgAlt: "imagem de sandália plataforma",
            name: "Plataformas",
        },
        {
            image: "assets/images/categories/botas.svg",
            imgAlt: "imagem de bota",
            name: "Botas",
        },
        {
            image: "assets/images/categories/sapatilhas.svg",
            imgAlt: "imagem de sapatilha",
            name: "Sapatilhas",
        },
    ],
};

export { CategoriesData };
