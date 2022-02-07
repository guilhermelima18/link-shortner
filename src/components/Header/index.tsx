import { Link, useLocation } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import styles from "./styles.module.scss";
import { MdArrowBackIosNew } from "react-icons/md";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        style={{
          justifyContent:
            pathname === "/my-links" ? "space-between" : "flex-end",
        }}
      >
        {pathname === "/my-links" && (
          <div className={styles.backHome}>
            <Link to="/">
              <span>
                <MdArrowBackIosNew fontSize={30} color="#FFF" />
                Home
              </span>
            </Link>
          </div>
        )}
        <div className={styles.myLinks}>
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
          <Link to="/my-links">
            <span>Meus links</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
