// import styles from "./styles.module.scss";

interface PaymentCardProps {
    imageSrc: string;
    imageAlt: string;
    text: string;
    key: number;
}

const PaymentCard = ({ imageSrc, imageAlt, text, key }: PaymentCardProps) => {
    return (
        <>
            <li key={key}>
                <img src={imageSrc} alt={imageAlt} />
                <p>{text}</p>
            </li>
        </>
    );
};

export { PaymentCard };
