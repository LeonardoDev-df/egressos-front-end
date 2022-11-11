import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
import ifb from "../../img/ifb.png";
import codamais from "../../img/logo-codamais.png";

function Footer() {
  return (
    <footer className={styles.footer}>
       <img className={styles.footerIfb}  src={ifb} alt="IFB" />
       <img  className={styles.footerCoda} src={codamais} alt="Coda" />
      <p className={styles.copy_right}>
        <span>SISTEMA DESENVOLVIDO POR CODAMAIS EMPRESA JUNIOR </span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer
