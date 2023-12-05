import React from 'react';
import Container from "../Container/Container";
import styles from './Registration.module.scss'
import RegistrationForm from "./RegistrationFrom/RegistrationForm";

const Registration = ({setCollapsePages} : {setCollapsePages:  React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <section className={styles.registration}>
     <Container className={styles.wrapper}>
       <h2>Working with POST request</h2>
       <RegistrationForm setCollapsePages={setCollapsePages}/>
     </Container>
    </section>
  );
};

export default Registration;