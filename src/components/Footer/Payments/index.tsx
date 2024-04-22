import { Title } from "../../Title";

interface PaymentItem {
    image: string;
    imageAlt: string;
}

interface PaymentsProps {
    paymentData: PaymentItem[];
}

import styles from "./styles.module.scss";

const Payments = ({ paymentData }: PaymentsProps) => {
    return (
        <div className={styles.container}>
            <Title classProp="smallTitle" text="FORMAS DE PAGAMENTO" />
            <ul>
                {paymentData.map((payment, index) => (
                    <li key={index}>
                        <img src={payment.image} alt={payment.imageAlt} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Payments };
