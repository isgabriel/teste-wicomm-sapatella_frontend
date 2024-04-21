import { FooterData } from "../../../data/Footer/footer";

import styles from "./styles.module.scss";

const CompanyInfos = () => {
    return (
        <div className={styles.companyInfosContainer}>
            <p>
                <span>{FooterData.address}</span>
                <span>{FooterData.cnpj}</span>
            </p>
            <div>
                <img
                    src="assets/logo/footer/wicommLogo.svg"
                    alt="logo wicomm"
                />
                <img src="assets/logo/footer/vtexLogo.svg" alt="logo vtex" />
            </div>
        </div>
    );
};

export { CompanyInfos };
