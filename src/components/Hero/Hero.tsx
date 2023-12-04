import React from 'react';
import styles from './Hero.module.scss';
import Container from "../Container/Container";
import Button from "../UIKit/Button/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Test assignment for front-end developer</h1>
          <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
            understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        </div>
        <Button variant='yellow'>Sign up</Button>
      </Container>
    </section>
  );
};

export default Hero;