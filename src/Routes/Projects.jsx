import React from "react";
import styles from "../Module_css/Projects.module.css";
import styles1 from "../Module_css/About.module.css";
import purplle from "../Images/shephora-home-navigation-slider.PNG";
import PrimeVideo from "../Images/DNA-home-page.PNG";
import hashnode from "../Images/shoppers-home-page-slider.PNG";
import baby from '../Images/navbar-sastadeal.png'
import {
  Icon_small,
  StyledIcon_react,
  StyledIcon_react_small,
} from "../Styled/DeviconIcon";
import { EveryHeading } from "../Styled/NavbarDiv";

export const Projects = () => {
  return (
    <div name="main_projects_link" className={styles.mainProjects} style={{backgroundImage:"url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
      <EveryHeading style={{color:"whitesmoke",marginTop:"20px",marginBottom:"0px" }}>PROJECTS</EveryHeading>
      <div className={styles.mainProjects_mainDiv}>
{/* caratlane project */}
<div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={"https://user-images.githubusercontent.com/108007506/221486611-cf7cb23e-912a-40c2-8f32-941c7bc0cf2b.png"} alt="caratlane.com" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              {" "}
              <h2>Caratlane.com</h2>
              <p>
              Caratlane is a Tanishq partner jewelry ecommerce website - clone .It was a Collaborative Project built in 5 days by 4 team members, App was built using React-redux ,HTML,CSS,JavaScript,and Chakra-ui and for backend we have used MongoDB,Mongoose,and Cyclic.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a target="_blank" href="https://24karat.netlify.app/">
                  <button className={styles1.viewDemoButton}>Live</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/mrprincesingh/freezing-value-6715"
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
                <Icon_small className="devicon-html5-plain-wordmark colored"></Icon_small>
                
              </div>
            </div>
            
          </div>
        </div>
{/* SNAPDEAL PROJECT STARTS HERE */}
      <div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={baby} alt="shop.com" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              {" "}
              <h2>Snapdeal.com</h2>
              <p>
              Snapdeal is an Indian e-commerce website Snapdeal was one of the largest online marketplaces in India. Snapdeal targets the value e-commerce segment.It was a Collaborative Project built in 5 days, App was built using React-redux ,HTML,CSS,JavaScript,and Chakra-ui.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a target="_blank" href="https://snapdeal-project.vercel.app/">
                  <button className={styles1.viewDemoButton}>Live</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/bhaveshkumar96/brash-profit-9147"
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
                <Icon_small className="devicon-html5-plain-wordmark colored"></Icon_small>
                
              </div>
            </div>
            
          </div>
        </div>
        
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
                  href="https://spectacular-otter-c3b514.netlify.app/"
                >
                  <button className={styles1.viewDemoButton}>Live</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/agrawalrajat310/DNA-News-clone"
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
