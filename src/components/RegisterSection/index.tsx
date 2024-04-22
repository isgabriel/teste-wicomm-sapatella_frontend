import { RegisterData } from "../../data/Register/register";
import { Button } from "../Button";
import { Input } from "../Input";

import styles from "./styles.module.scss";

const RegisterSection = () => {
    return (
        <section className={styles.registerContainer}>
            {RegisterData.map((item, index) => (
                <div key={index}>
                    <h2>
                        Cadastre-se e ganhe <span>R$20 OFF</span> na sua
                        primeira compra!
                    </h2>
                    <div>
                        <Input
                            classProp="registeInput"
                            placeholderProp={item.inputName}
                        />
                        <Input
                            classProp="registeInput"
                            placeholderProp={item.inputEmail}
                        />
                        <Button classProps="registerButton" text="Cadastrar" />
                    </div>
                </div>
            ))}
        </section>
    );
};

export { RegisterSection };
