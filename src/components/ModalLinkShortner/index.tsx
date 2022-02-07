import { SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import { FiClipboard, FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

interface ModalLinkShortnerProps {
  currentLink?: {
    id: string;
    link: string;
    long_url: string;
    created_at: string;
  };
  linkShortnerModal?: {
    id?: string;
    link?: string;
    long_url?: string;
  };
  closeModal: React.Dispatch<SetStateAction<boolean>>;
}

const ModalLinkShortner = ({
  currentLink,
  linkShortnerModal,
  closeModal,
}: ModalLinkShortnerProps) => {
  const { pathname } = useLocation();

  const handleSaveClipboard = (link: string | undefined) => {
    if (link) {
      navigator.clipboard.writeText(link);
    }
  };

  return (
    <>
      {pathname === "/" ? (
        <div className={styles.modalContainer}>
          <main key={currentLink?.id} className={styles.modalContent}>
            <header>
              <h1>Link encurtado:</h1>
              <button onClick={() => closeModal(false)}>
                <FiX fontSize={24} color="#333" />
              </button>
            </header>
            <h5>{currentLink?.long_url}</h5>
            <span>
              <p>{currentLink?.link}</p>
              <button onClick={() => handleSaveClipboard(currentLink?.link)}>
                <FiClipboard fontSize={24} color="#FFF" />
              </button>
            </span>
          </main>
        </div>
      ) : (
        <div className={styles.modalContainer}>
          <main key={linkShortnerModal?.id} className={styles.modalContent}>
            <header>
              <h1>Link encurtado:</h1>
              <button onClick={() => closeModal(false)}>
                <FiX fontSize={24} color="#333" />
              </button>
            </header>
            <h5>{linkShortnerModal?.long_url}</h5>
            <span>
              <p>{linkShortnerModal?.link}</p>
              <button
                onClick={() => handleSaveClipboard(linkShortnerModal?.link)}
              >
                <FiClipboard fontSize={24} color="#FFF" />
              </button>
            </span>
          </main>
        </div>
      )}
    </>
  );
};

export default ModalLinkShortner;
