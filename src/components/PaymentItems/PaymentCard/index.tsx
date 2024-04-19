// import styles from "./styles.module.scss";

interface PaymentCardProps {
    imageSrc: string;
    imageAlt: string;
    text: string;
}

const PaymentCard = ({ imageSrc, imageAlt, text }: PaymentCardProps) => {
    return (
        <li>
            <img src={imageSrc} alt={imageAlt} />
            <p>{text}</p>
        </li>
    );
};

export { PaymentCard };
