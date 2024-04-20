import { ModalData } from "../../data/Modal/modal";
import { Button } from "../Button";
import { Title } from "../Title";

import styles from "./styles.module.scss";

const Modal = () => {
    return (
        <div className={styles.modalContainer}>
            <section className={styles.contentModalDiv}>
                <Title text={ModalData.name} classProp="bigTitle" />
                <p>
                    <span>{ModalData.ate} </span>
                    {ModalData.offValue}
                </p>
            </section>
            <section>
                <img src={ModalData.image} alt={ModalData.imageAlt} />
            </section>
            <section className={styles.btnContainer}>
                <Button text="Conferir" classProps="btnModal" />
            </section>
        </div>
    );
};

export { Modal };
