import { FooterData } from "../../data/Footer/footer";
import { CompanyInfos } from "./CompanyInfos";
import { NavFooter } from "./NavFooter";
import { Payments } from "./Payments";
import { Safety } from "./Safety";
import { SocialLinks } from "./SocialLinks";

import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
            <div className={styles.contentDivFooter}>
                <div className={styles.logoAndSocialsContainer}>
                    <a href="#">
                        <img src={FooterData.logo} alt="Logo" />
                    </a>

                    <SocialLinks socialData={FooterData.social} />
                </div>
                <div className={styles.mainFooterContainer}>
                    <div className={styles.allCompanyLinks}>
                        <NavFooter
                            title={FooterData.about.title}
                            navItems={FooterData.about.nav}
                        />
                        <NavFooter
                            title={FooterData.myAccount.title}
                            navItems={FooterData.myAccount.nav}
                        />
                        <NavFooter
                            title={FooterData.support.title}
                            navItems={FooterData.support.nav}
                        />
                    </div>
                    <div className={styles.paymentAndSafetyContainer}>
                        <Payments paymentData={FooterData.payments} />
                        <Safety safetyData={FooterData.safety} />
                    </div>
                </div>
            </div>
            <CompanyInfos />
        </footer>
    );
};

export { Footer };
