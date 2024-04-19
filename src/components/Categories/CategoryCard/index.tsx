interface CategoryCardProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
}

const CategoryCard = ({ imageSrc, imageAlt, name }: CategoryCardProps) => {
    return (
        <a href="/">
            <img src={imageSrc} alt={imageAlt} />
            <p>{name}</p>
        </a>
    );
};

export { CategoryCard };
