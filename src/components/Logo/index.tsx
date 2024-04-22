import styles from "./styles.module.scss";

interface logoProps {
    classProp?: string;
    src: string;
    alt: string;
}

const Logo = ({ classProp, src, alt }: logoProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classProp ? styles[classProp] : ""}
        />
    );
};

export { Logo };
