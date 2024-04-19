import styles from "./styles.module.scss";
interface inputProps {
    classProp?: string;
    type?: string;
    placeholderProp: string;
}
const Input = ({ classProp, type, placeholderProp }: inputProps) => {
    return (
        <input
            className={classProp ? styles[classProp] : ""}
            type={type ? type : "name"}
            placeholder={placeholderProp}
        />
    );
};
export { Input };
