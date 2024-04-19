import styles from "./styles.module.scss";

interface buttonProps {
    classProps?: string;
    text: string;
}
const Button = ({ classProps, text }: buttonProps) => {
    return (
        <button className={classProps ? styles[classProps] : ""}>{text}</button>
    );
};

export { Button };
