import React from "react";
import styles from "./About.module.css";  
import { getImageUrl } from "../../utils";


export const About = () => {
    return (

        <section className={styles.container} id="about">

                <h2 className={styles.title}>About</h2>

                <div className={styles.content}> 
        
                    <img src ={getImageUrl("about/aboutimage1.png")} className={styles.aboutImage} alt="about" />


                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}> <img src ={getImageUrl("about/cursorIcon.png")} alt="about" />
                        
                        

                         <div className={styles.aboutItemText}>
                                <h3>FrontEnd Developper</h3>
                                <p>Im frontend developper.....</p>

                        </div>
                        
                        
                         </li>

                         <li className={styles.aboutItem} >  <img src ={getImageUrl("about/serverIcon.png")} alt="about" />
                        
                        

                        <div className={styles.aboutItemText}>
                               <h3>Backend Developper</h3>
                               <p>Im frontend developper.....</p>

                       </div>
                       
                       
                        </li>


                        <li className={styles.aboutItem}>  <img src ={getImageUrl("about/cursorIcon.png")} alt="about" />
                        
                        
                        <div className={styles.aboutItemText}>
                               <h3>UI Developper</h3>
                               <p>Im frontend developper.....</p>

                       </div>
                       
                       
                        </li>

                       
                    </ul>


                </div>




        </section>
    
    );
}