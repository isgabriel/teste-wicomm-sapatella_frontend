import styles from "./styles.module.scss";
interface inputProps {
    classProp?: string;
    type?: string;
}
const Input = ({ classProp, type }: inputProps) => {
    return (
        <input
            className={classProp ? styles[classProp] : ""}
            type={type ? type : "name"}
        />
    );
};
export { Input };
