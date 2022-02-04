import { SetStateAction } from "react";
import { FiClipboard, FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

interface ModalLinkShortnerProps {
  currentLink?: {
    id: string;
    link: string;
    long_url: string;
    created_at: string;
  };
  closeModal: React.Dispatch<SetStateAction<boolean>>;
}

const ModalLinkShortner = ({
  currentLink,
  closeModal,
}: ModalLinkShortnerProps) => {
  return (
    <div className={styles.modalContainer}>
      <main key={currentLink && currentLink.id} className={styles.modalContent}>
        <header>
          <h1>Link encurtado:</h1>
          <button onClick={() => closeModal(false)}>
            <FiX fontSize={24} color="#333" />
          </button>
        </header>
        <h5>{currentLink && currentLink.long_url}</h5>
        <span>
          <p>{currentLink && currentLink.link}</p>
          <FiClipboard fontSize={24} color="#FFF" />
        </span>
      </main>
    </div>
  );
};

export default ModalLinkShortner;
