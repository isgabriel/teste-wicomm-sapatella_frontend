import { AboutData } from "../../data/About/about";

const AboutSection = () => {
    return (
        <section>
            {AboutData.map((item, index) => (
                <div key={index}>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    <img src={item.image} alt={item.imageAlt} />
                </div>
            ))}
            <div></div>
            <img src="" alt="" />
        </section>
    );
};

export { AboutSection };
