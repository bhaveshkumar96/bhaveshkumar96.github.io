import React from "react";
import Bhanu from "../Images/final1.png";
import styles from "../Module_css/About.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

export const About = () => {
  return (
    <>
      <div id="main_about_link" className={styles.mainAboutDiv} style={{backgroundImage: 
 "url('https://images.unsplash.com/photo-1549700337-d4fcfce79ae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}}>
        <div className={styles.about_outerDivImg}>
          <div className={styles.about_InnerDivImg}>
            <img src={Bhanu} alt="" />
          </div>
        </div>
        <div className={styles.about_nameH1Div}>
          {/* <div className={styles.hello}>
                        <span className={styles.hand_wave}> 👋🏻 </span> Hi, my
                        name is
                    </div> */}

          <h1>
            <span className={styles.about_hii}>&nbsp;</span>
            <span>
              {" "}
              <span id={styles.hiIam}>I am</span> <h2>Bhavesh Kumar</h2> 
            </span>
          </h1>
        </div>
        <div className={styles.about_devH3Div}>
          <h2> <i>Full Stack Web Developer</i> </h2>
        </div>
        {/* <div className={styles.about_descPDiv}>
          <p>
            <i>
              Enthusiastic Full Stack Web Developer specialized in MERN stack. Keen
interest in learning new things and working with dynamic teams. Practiced
1200 hours of coding. Looking forward to an exciting opportunity and
Development experience in a product-based company.
            </i>
          
          </p>
        </div>
        <div className={styles.about_outerDiv_icons}>
          <div>
            <a
              style={{ marginLeft: "0.27em" }}
              className="nav-not-active-link"
              target="_blank"
              href="https://www.linkedin.com/in/bhavesh-kumar-184451200/"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <a
              style={{ marginLeft: "0px" }}
              className="nav-not-active-link"
              target="_blank"
              href="https://github.com/bhaveshkumar96"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              style={{ marginLeft: "0px" }}
              className="nav-not-active-link"
              target="_blank"
              href="mailto:bk769221@gmail.com"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className={styles.about_address_numberDiv}>
          <div>
            <TiLocation />
            <p>Rajasthan, India</p>
          </div>
          <div>
            <FiSmartphone />
            <p>(+91) 8946891025</p>
          </div>
        </div> */}
        <div className={styles.resumeButtonDiv}>
          <a href="Bhavesh_Kumar_Resume.pdf.pdf" download>
            <button className={styles.resumeButton}  onClick={()=>{ window.open('https://drive.google.com/file/d/1qtwMLZiIyi5jg9m4jee5n-_5HCxdjJyX/view')}} >Resume</button>
          </a>
        </div>
      </div>
    </>
  );
};
