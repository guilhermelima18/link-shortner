import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <a>
            <AiOutlineInstagram fontSize={24} color="white" />
          </a>
        </Link>
        <Link to="/">
          <a>
            <AiOutlineYoutube fontSize={24} color="white" />
          </a>
        </Link>
        <Link to="/">
          <a className={styles.links}>Meus links</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
