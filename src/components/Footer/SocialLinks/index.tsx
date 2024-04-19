interface SocialItem {
    image: string;
    imageAlt: string;
}

interface SocialLinksProps {
    socialData: SocialItem[];
}

const SocialLinks = ({ socialData }: SocialLinksProps) => {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <a href="#" onClick={ScrollToTop}>
            {socialData.map((item, index) => (
                <img src={item.image} alt={item.imageAlt} key={index} />
            ))}
        </a>
    );
};

export { SocialLinks };
