import React from 'react';
import {ReactComponent as LogoImg} from "../../../assets/images/header/logo-img.svg";
import {ReactComponent as LogoText} from "../../../assets/images/header/logo-text.svg";

import styles from './Header.module.scss'
import Button from "../../UIKit/Button/Button";
import Container from "../../Container/Container";

const Header = () => {
  return (
    <header >
     <Container className={styles.header}>
       <div className={styles.logo}>
         <LogoImg width={38} height={26}/>
         <LogoText />
       </div>
       <div className={styles.buttons}>
         <Button variant='yellow'>Users</Button>
         <Button variant='yellow'>Sign up</Button>
       </div>
     </Container>
    </header>
  );
};

export default Header;