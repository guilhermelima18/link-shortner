import Layout from "../../components/Layout";
import Input from "../../components/Input";
import ButtonLink from "../../components/ButtonLink";
import logoImg from "../../assets/logo.svg";
import linkIcon from "../../assets/link.svg";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <img src={logoImg} alt="Logo" />
        <h1>Link Shortner</h1>
        <h4>Cole seu link para encurtá-lo</h4>

        <div className={styles.inputGroup}>
          <span>
            <img src={linkIcon} alt="Ícone" />
            <Input type="url" placeholder="Cole seu link aqui" />
          </span>
          <ButtonLink buttonText="Gerar link" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
