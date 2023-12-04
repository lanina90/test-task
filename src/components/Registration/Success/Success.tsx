import React from 'react';
import Container from "../../Container/Container";
import {ReactComponent as SuccessImg} from "../../../assets/images/success/success.svg";
import styles from './Success.module.scss'

const Success = () => {
  return (
    <section>
      <Container className={styles.success}>
        <h2>User successfully registered</h2>
        <div className={styles.image}>
          <SuccessImg/>
        </div>
      </Container>
      
    </section>
  );
};

export default Success;