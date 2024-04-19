import { PaymentItemsData } from "../../data/PaymentItems/paymentItems";
import { PaymentCard } from "./PaymentCard";

const PaymentItems = () => {
    return (
        <section>
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
