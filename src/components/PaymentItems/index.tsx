import { PaymentItemsData } from "../../data/PaymentItems/paymentItems";
import { PaymentCard } from "./PaymentCard";

import styles from "./styles.module.scss";

const PaymentItems = () => {
    return (
        <section className={styles.paymentItemsContainer}>
            <ul>
                {PaymentItemsData.map((item, index) => (
                    <PaymentCard
                        imageSrc={item.image}
                        imageAlt={item.imgAlt}
                        text={item.text}
                        key={index}
                    />
                ))}
            </ul>
        </section>
    );
};

export { PaymentItems };
