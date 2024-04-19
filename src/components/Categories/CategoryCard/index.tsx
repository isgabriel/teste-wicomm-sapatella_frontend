interface CategoryCardProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
}

const CategoryCard = ({ imageSrc, imageAlt, name }: CategoryCardProps) => {
    return (
        <li>
            <a href="/">
                <img src={imageSrc} alt={imageAlt} />
                <p>{name}</p>
            </a>
        </li>
    );
};

export { CategoryCard };
