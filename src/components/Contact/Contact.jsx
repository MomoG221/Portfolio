import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
export const Contact = () => {
  return (
    
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>

                <h2>Contact</h2>
                <p>Feel free to reach out!</p>

            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}/>
                <a href="mailto:mohamed.gueye88@gmail.com">Email</a>
                </li>

                <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")}/>
                <a href="https://www.linkedin.com/in/mohamed-gueye-249b55264/">LinkedIn</a>
                </li>

                <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")}/>
                <a href="https://github.com/MomoG221">GitHub</a>
                </li>

            </ul>


        </footer>

  )
}


