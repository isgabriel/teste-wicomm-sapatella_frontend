import styles from "./styles.module.scss";

interface titleProps {
    text?: string;
    classProp?: string;
}

const Title = ({ text, classProp }: titleProps) => {
    return <h2 className={classProp ? styles[classProp] : ""}>{text}</h2>;
};

export { Title };
