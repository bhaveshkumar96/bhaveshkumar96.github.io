import React from "react";
import styles from "../Module_css/Footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  function scrollTo() {
    scroll.scrollTo(0);
  }

  return (
    <div name="main_footer_link" className={styles.footer_mainDiv} style={{backgroundImage:"url('https://im3.ezgif.com/tmp/ezgif-3-c2225c5350.jpg')"}}>
      <div className={styles.footer_scrollup}>
        <IoIosArrowDropupCircle onClick={scrollTo} />
        {/* <img src={ Round} alt="" /> */}
      </div>
      <div className={styles.footer_outerDiv_icons}>
        <div>
          <a
            style={{ marginLeft: "0px" }}
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
      <div className={styles.footer_address_numberDiv}>
        <div>
          <TiLocation />
          <p>Rajasthan, India</p>
        </div>
        <div>
          <FiMail />
          <p>bk769221@gmail.com</p>
        </div>
        <div>
          <FiSmartphone />
          <p>(+91) 8946891025</p>
        </div>
      </div>
      <div className={styles.footer_designBy}>
        <p> ©️ 2023,Bhavesh Kumar</p>
      </div>
    </div>
  );
};
