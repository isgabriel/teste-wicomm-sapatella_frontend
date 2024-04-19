import { FooterData } from "../../data/Footer/footer";
import { NavFooter } from "./NavFooter";
import { Payments } from "./Payments";
import { Safety } from "./Safety";
import { SocialLinks } from "./SocialLinks";

const Footer = () => {
    return (
        <footer>
            <div>
                {FooterData.endLogos.map((logo, index) => (
                    <img src={logo.logo} alt="Logo" key={index} />
                ))}

                <SocialLinks socialData={FooterData.social} />
            </div>
            <div>
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
            <Payments paymentData={FooterData.payments} />
            <Safety safetyData={FooterData.safety} />
        </footer>
    );
};

export { Footer };
