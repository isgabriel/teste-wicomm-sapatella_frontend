interface inputProps {
    classProp?: string;
    type?: string;
    placeholderProp: string;
}

import styles from "./styles.module.scss";

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
