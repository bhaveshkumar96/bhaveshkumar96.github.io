import styles from "../Module_css/About.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
export const Home = () => {
  return (
    <div id="main_home_link" className={styles.mainAboutDiv} style={{backgroundImage: 
      "url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"}}>
          <img src="https://camo.githubusercontent.com/9353871f026f9c8758aadaf06b886a3cc5028d2c3f8754d2cad8013532d80bd2/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f7167515567674143335066763638377150432f67697068792e6769663f6369643d373930623736313164643062356131643332383135626136333463666665393563626236343437353035373465353064267269643d67697068792e6769662663743d67" alt="" />
          <div className={styles.about_descPDiv} >
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
        </div>
    </div>
  )
}
