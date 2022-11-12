import { Link } from "react-router-dom";
import Container from "./Container";
import Contain from "./NavbarMobile";
import { IoClose } from 'react-icons/io5'

import styles from "./Navbar.module.css";
import logo from "../../img/sisae.png";

function Navbar({ menuIsVisible, setMenuIsVisible}) {
  return (
    <>
    <div className={styles.navbar} >
      <Container >
        <Link to="/">
          <img src={logo} alt="Sisae" />
         
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
            <Link to="/">SOBRE</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">CONTATO</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">AJUDA</Link>
          </li>
          <li className={styles.item}>
            <div className={styles.login}>
            <Link   to="/">LOGIN</Link>
            </div>   
          </li>
        </ul>
      </Container>
    </div>
        
        

       

    <div className={styles.navbarMobile}>  
    
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Sisae" />
         
        </Link>
        <div className={styles.title}>
          <h1>SISAE</h1>
          <h2>SISTEMA DE AVALIAÇÃO E </h2> 
          <h3>ACOMPANHAMENTO DE EGRESSOS</h3>
        </div>
        <div className={styles.cont}  >
       
            <IoClose size={45} onClick={() => setMenuIsVisible(false)}/> 
          <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/">INÍCIO</Link>
              </li>
              <li className={styles.item}>
                <Link to="/">SOBRE</Link>
              </li>
              <li className={styles.item}>
                <Link to="/">CONTATO</Link>
              </li>
              <li className={styles.item}>
                <Link to="/">AJUDA</Link>
              </li>
              <li className={styles.item}>
                <div className={styles.login}>
                <Link   to="/">LOGIN</Link>
                </div>   
              </li>
          </ul>
          
        </div>
       
    </div>  
    </>
  );
}

export default Navbar;
