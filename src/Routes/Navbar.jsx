import {
  NavbarDiv,
  NavbarLi,
  NavbarMainDiv,
  NavbarHam,
} from "../Styled/NavbarDiv";
import logo1 from "../Images/Bhavesh Kumar (2).png";
import { Link } from "react-scroll";
import { HamburgerMenuFun } from "./HamburgerMenu";

export const Navbar = () => {
  const links = [
    {
      to: "main_about_link",
      title: "About",
    },
    {
      to: "main_skill_link",
      title: "Skills",
    },
    {
      to: "main_projects_link",
      title: "Projects",
    },
    {
      to: "main_resume_link",
      title: "Resume",
    },
    {
      to: "main_footer_link",
      title: "Contact",
    },
  ];

  return (
    <NavbarMainDiv>
      <NavbarDiv>
        <NavbarDiv>
          <NavbarLi>
            <Link
              activeClassName="nav-link-active"
              className="nav-not-active-link"
              to="main_about_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
            <i>
            <h1>Bhavesh Kumar</h1>
              </i>  
            </Link>
          </NavbarLi>
        </NavbarDiv>
        <NavbarDiv>
          <NavbarLi>
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_about_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              About
            </Link>
          </NavbarLi>
          <NavbarLi>
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_skill_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Skills
            </Link>
          </NavbarLi>
          <NavbarLi>
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_projects_link"
              duration={1500}
              delay={10}
              smooth={true}
              offeset={0}
            >
              Projects
            </Link>
          </NavbarLi>
          <NavbarLi>
            <a
              className="nav-not-active-link"
              target="_blank"
              href="https://drive.google.com/file/d/1qtwMLZiIyi5jg9m4jee5n-_5HCxdjJyX/view?usp=sharing"
            >
              Resume
            </a>
          </NavbarLi>
          <NavbarLi>
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_footer_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Contact
            </Link>
          </NavbarLi>
        </NavbarDiv>
        <NavbarHam>
          <HamburgerMenuFun />
        </NavbarHam>
      </NavbarDiv>
    </NavbarMainDiv>
  );
};
