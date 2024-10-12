import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {

        return <section className={styles.container}>

        <div className={styles.content} >
            
            <h1 className={styles.title}>Hi, I'm Mohamed </h1>
            <p className={styles.description}>I'm  a software engineering student at Concordia University. Reach out if you'd like to learn more!</p>
            <br/>
            <a href="mailto:mohamed.gueye88@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>

            <img src = {getImageUrl("hero/heroImage.png") } className={styles.heroImg} alt="hero" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

      


        </section>

}