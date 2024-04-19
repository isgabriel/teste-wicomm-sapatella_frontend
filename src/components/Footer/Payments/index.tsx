interface PaymentItem {
    image: string;
    imageAlt: string;
}

interface PaymentsProps {
    paymentData: PaymentItem[];
}

const Payments = ({ paymentData }: PaymentsProps) => {
    return (
        <div>
            {paymentData.map((payment, index) => (
                <img src={payment.image} alt={payment.imageAlt} key={index} />
            ))}
        </div>
    );
};

export { Payments };
