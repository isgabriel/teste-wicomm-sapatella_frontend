interface SocialItem {
    image: string;
    imageAlt: string;
}

interface SocialLinksProps {
    socialData: SocialItem[];
}

import styles from "./styles.module.scss";

const SocialLinks = ({ socialData }: SocialLinksProps) => {
    return (
        <div className={styles.container}>
            {socialData.map((item, index) => (
                <a href="#" key={index}>
                    <img src={item.image} alt={item.imageAlt} />
                </a>
            ))}
        </div>
    );
};

export { SocialLinks };
