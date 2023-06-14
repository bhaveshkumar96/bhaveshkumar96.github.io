import React from "react";
import styles from "../Module_css/Skills.module.css";
import { StyledIcon_react } from "../Styled/DeviconIcon";
import { EveryHeading, EveryHeading2 } from "../Styled/NavbarDiv";

export const Skills = () => {
  return (
    <div
      name="main_skill_link"
      className={styles.skill_MainOuterDiv}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1549700337-d4fcfce79ae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      }}
    >
      <div className={styles.skill_mainHeading}>
        <EveryHeading style={{color:"whitesmoke",marginTop:"60px",marginBottom:"0px" }}>
            Skills
        </EveryHeading>
      </div>
      <div className={styles.skill_gridMain}>
        <div>
          <StyledIcon_react className="devicon-html5-plain-wordmark colored"></StyledIcon_react>
          <EveryHeading2>HTML5</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-css3-plain-wordmark colored"></StyledIcon_react>
          <EveryHeading2>CSS3</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-javascript-plain colored"></StyledIcon_react>
          <EveryHeading2>JAVASCRIPT</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-react-original colored"></StyledIcon_react>
          <EveryHeading2>REACT</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-nodejs-plain colored"></StyledIcon_react>
          <EveryHeading2>NODE JS</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-mongodb-plain colored"></StyledIcon_react>
          <EveryHeading2>MONGO DB</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-express-original colored"></StyledIcon_react>
          <EveryHeading2>EXPRESS</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-github-original"></StyledIcon_react>
          <EveryHeading2>GITHUB</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-typescript-original"></StyledIcon_react>
          <EveryHeading2>TYPESCRIPT</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-redux-original"></StyledIcon_react>
          <EveryHeading2>REDUX</EveryHeading2>
        </div>
      </div>
    </div>
  );
};
