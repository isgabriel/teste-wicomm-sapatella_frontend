interface SafetyDataProps {
    image: string;
    imageAlt: string;
}

const Safety = ({ safetyData }: { safetyData: SafetyDataProps[] }) => {
    return (
        <div>
            {safetyData.map((item, index) => (
                <img src={item.image} alt={item.imageAlt} key={index} />
            ))}
        </div>
    );
};

export { Safety };
