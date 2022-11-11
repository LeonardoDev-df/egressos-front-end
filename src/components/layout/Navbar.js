import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/sisae.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
         
        </Link>
        <div className={styles.title}>
          <h1>SISAE</h1>
          <h2>SISTEMA DE AVALIAÇÃO E ACOMPANHAMENTO DE EGRESSOS</h2>
        </div>
        
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">INÍCIO</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">SOBRE</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">CONTATO</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">AJUDA</Link>
          </li>
          <li className={styles.item}>
            <div className={styles.login}>
            <Link   to="/contact">LOGIN</Link>
            </div>   
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
