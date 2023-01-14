import React from "react";
import styles from "../Module_css/Projects.module.css";
import styles1 from "../Module_css/About.module.css";
import purplle from "../Images/shephora-home-navigation-slider.PNG";
import PrimeVideo from "../Images/DNA-home-page.PNG";
import hashnode from "../Images/shoppers-home-page-slider.PNG";
import bestBuy from "../Images/bestbuy3.png";
import {
  Icon_small,
  StyledIcon_react,
  StyledIcon_react_small,
} from "../Styled/DeviconIcon";
import { EveryHeading } from "../Styled/NavbarDiv";

export const Projects = () => {
  return (
    <div name="main_projects_link" className={styles.mainProjects}>
      <EveryHeading>PROJECTS</EveryHeading>
      <div className={styles.mainProjects_mainDiv}>
        <div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={purplle} alt="" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              <h2>Sephora NNNOW</h2>
              <p>
                A leader in luxury beauty and skincare, our purpose at Sephora
                online India is to create an inviting online beauty shopping
                experience and inspire fearlessness in our community.This was
                an Individual project which was done by me in 5-days using
                HTML and CSS.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a
                  target="_blank"
                  href="https://project-sephora-unit-2.netlify.app/"
                >
                  <button className={styles1.viewDemoButton}>Live</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/bhaveshkumar96/happy-coast-4233"
                >
                  <button className={styles1.viewDemoButton}>
                    View Source
                  </button>
                </a>
              </div>
              <div
                className={
                  styles.mainProjects_mainDiv_project1_summary_flex_icon
                }
              >
                <Icon_small className="devicon-html5-plain-wordmark colored"></Icon_small>
                <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={PrimeVideo} alt="" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              {" "}
              <h2>DNA India</h2>
              <p>
                DNA is an English broadsheet daily owned by Diligent Media
                Corporation, an Essel Group company. Through news, views,
                analyses and interactivity. It was a Collaborative Project Build
                by team of 4 members in 5 days using HTML,CSS and Advanced
                JavaScript.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/agrawalrajat310/fertile-distance-9246"
                >
                  <button className={styles1.viewDemoButton}>Live</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/jayprakashlohar/hardy-mouth-2466/tree/main/licious.in"
                >
                  <button className={styles1.viewDemoButton}>
                    View Source
                  </button>
                </a>
              </div>
              <div
                className={
                  styles.mainProjects_mainDiv_project1_summary_flex_icon
                }
              >
                <Icon_small className="devicon-html5-plain-wordmark colored"></Icon_small>
                <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                <Icon_small className="devicon-javascript-plain colored"></Icon_small>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={hashnode} alt="shop.com" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              {" "}
              <h2>Shop.com</h2>
              <p>
                SHOP.COM is a new kind of shopping comparison site that offers
                the most comprehensive shopping experience on the web.This was
                an Individual project which was done by me in 5-days using
                ReactJS,HTML, CSS, and Chakra-UI.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a target="_blank" href="https://omniscient-flesh-7235.vercel.app/">
                  <button className={styles1.viewDemoButton}>Live</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/bhaveshkumar96/omniscient-flesh-7235"
                >
                  <button className={styles1.viewDemoButton}>
                    View Source
                  </button>
                </a>
              </div>
              <div
                className={
                  styles.mainProjects_mainDiv_project1_summary_flex_icon
                }
              >
                <Icon_small className="devicon-react-original-wordmark colored"></Icon_small>
                <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                <Icon_small className="devicon-javascript-plain colored"></Icon_small>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
