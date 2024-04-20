import styles from "./styles.module.scss";

interface buttonProps {
    classProps?: string;
    text: string;
}
const Button = ({ classProps, text }: buttonProps) => {
    return (
        <a href="#" className={classProps ? styles[classProps] : ""}>
            <button>{text}</button>
        </a>
    );
};

export { Button };
