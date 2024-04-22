import styles from "./styles.module.scss";

interface logoProps {
    classProp?: string;
    src: string;
    alt: string;
}

const Logo = ({ classProp, src, alt }: logoProps) => {
    return (
        <a href="#">
            <img
                src={src}
                alt={alt}
                className={classProp ? styles[classProp] : ""}
            />
        </a>
    );
};

export { Logo };
