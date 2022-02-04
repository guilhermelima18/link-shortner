import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import ButtonLink from "../../components/ButtonLink";
import ModalLinkShortner from "../../components/ModalLinkShortner";
import { api } from "../../services/api";
import logoImg from "../../assets/logo.svg";
import linkIcon from "../../assets/link.svg";
import styles from "./styles.module.scss";

interface LinkShortnerProps {
  id: string;
  link: string;
  long_url: string;
  created_at: string;
}

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [Inputlink, setInputLink] = useState("");
  const [currentLink, setCurrentLink] = useState();
  const [linkShortner, setLinkShortner] = useState<LinkShortnerProps[]>(() => {
    const storageItem = localStorage.getItem("@linkShortner:links");

    if (storageItem) {
      return JSON.parse(storageItem);
    }

    return [];
  });

  const getLinkShortner = async (e: any) => {
    e.preventDefault();

    const params = {
      long_url: Inputlink,
      domain: "bit.ly",
    };

    const response = await api.post("/shorten", params);

    if (response.data) {
      setCurrentLink(response.data);
      setLinkShortner([...linkShortner, response.data]);
    }

    setShowModal(true);
  };

  useEffect(() => {
    localStorage.setItem("@linkShortner:links", JSON.stringify(linkShortner));
  }, [linkShortner]);

  return (
    <Layout>
      <main className={styles.main}>
        <img src={logoImg} alt="Logo" />
        <h1>Link Shortner</h1>
        <h4>Cole seu link para encurtá-lo</h4>

        <div className={styles.inputGroup}>
          <span>
            <img src={linkIcon} alt="Ícone" />
            <Input
              type="url"
              placeholder="Cole seu link aqui"
              value={Inputlink}
              onChange={(e: any) => setInputLink(e.target.value)}
            />
          </span>
          <ButtonLink buttonText="Gerar link" onClick={getLinkShortner} />
        </div>
      </main>

      {showModal && (
        <ModalLinkShortner
          closeModal={setShowModal}
          currentLink={currentLink}
        />
      )}
    </Layout>
  );
};

export default Home;
