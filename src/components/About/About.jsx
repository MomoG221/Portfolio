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
                                <h3>Full-Stack Development</h3>
                                <p>Experienced in working with both front-end and back-end technologies to create modern web applications.</p>

                        </div>
                        
                        
                         </li>

                         <li className={styles.aboutItem} >  <img src ={getImageUrl("about/serverIcon.png")} alt="about" />
                        
                        

                        <div className={styles.aboutItemText}>
                               <h3>Problem-Solving</h3>
                               <p>I enjoy tackling complex programming challenges with creative and efficient solutions.</p>

                       </div>
                       
                       
                        </li>


                        <li className={styles.aboutItem}>  <img src ={getImageUrl("about/uiIcon.png")} alt="about" />
                        
                        
                        <div className={styles.aboutItemText}>
                               <h3>Continuous Learning</h3>
                               <p>Committed to growing my skills and staying current with new technologies.</p>

                       </div>
                       
                       
                        </li>

                       
                    </ul>


                </div>




        </section>
    
    );
}