import { RegisterData } from "../../data/Register/register";
import { Button } from "../Button";
import { Input } from "../Input";

const RegisterSection = () => {
    return (
        <section>
            {RegisterData.map((item, index) => (
                <div key={index}>
                    <h2>
                        Cadastre-se e ganhe <span>R$20 OFF</span> na sua
                        primeira compra!
                    </h2>
                    <div>
                        <Input placeholderProp={item.inputName} />
                        <Input placeholderProp={item.inputEmail} />
                        <Button classProps="registerButton" text="Cadastrar" />
                    </div>
                </div>
            ))}
        </section>
    );
};

export { RegisterSection };
