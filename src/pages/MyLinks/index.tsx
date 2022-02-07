import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import Layout from "../../components/Layout";
import ModalLinkShortner from "../../components/ModalLinkShortner";
import styles from "./styles.module.scss";

interface LinkShortnerProps {
  id: string;
  link: string;
  long_url: string;
  created_at: string;
}

const MyLinks = () => {
  const [showModal, setShowModal] = useState(false);
  const [linksShortner, setLinksShortner] = useState<LinkShortnerProps[]>([]);
  const [linkShortnerModal, setLinkShortnerModal] = useState({});

  useEffect(() => {
    const getLinksStorage = localStorage.getItem("@linkShortner:links");

    if (getLinksStorage) {
      return setLinksShortner(JSON.parse(getLinksStorage));
    }
  }, []);

  const handleDeleteLink = (id: string) => {
    const linkIndex = linksShortner.findIndex((link) => link.id === id);

    if (linkIndex !== -1) {
      linksShortner.splice(linkIndex, 1);
    }

    localStorage.setItem("@linkShortner:links", JSON.stringify(linksShortner));
    setLinksShortner([...linksShortner]);
  };

  const handleClickLink = (id: string, link: string, long_url: string) => {
    const linkModal = { id, link, long_url };

    if (linkModal) {
      setLinkShortnerModal(linkModal);
      setShowModal(true);
    }
  };

  return (
    <Layout>
      <main className={styles.main}>
        <span>Meus Links</span>

        <section>
          {linksShortner &&
            linksShortner.map(({ id, link, long_url }) => (
              <div key={id} className={styles.myLinks}>
                <button onClick={() => handleClickLink(id, link, long_url)}>
                  <FiLink fontSize={24} color="#FFF" />
                  {long_url}
                </button>
                <button
                  className={styles.btnDelete}
                  onClick={() => handleDeleteLink(id)}
                >
                  <MdDelete fontSize={24} color="#FFF" />
                </button>
              </div>
            ))}
        </section>
      </main>
      {showModal && (
        <ModalLinkShortner
          closeModal={setShowModal}
          linkShortnerModal={linkShortnerModal}
        />
      )}
    </Layout>
  );
};

export default MyLinks;
