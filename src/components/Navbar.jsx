import "../styles/navbar.scss";

import resume from "../assets/resume.png";

import { HashLink } from 'react-router-hash-link';

function Navbar({activeSection}) {

  return (
    <nav>
      <div>
        <div className="left">
          <span key={activeSection} className="showingUpAnimation">{activeSection === "home" ? "ROHIT": activeSection}</span>
        </div>

        <div className="center">

          <HashLink smooth to={"/#"} >
            <span>HOME</span>
          </HashLink>

          <HashLink smooth to={"/#skills"} >
            <span>SKILLS</span>
          </HashLink>

          <HashLink smooth to={'/#projects'}>
            <span >PROJECTS</span>
          </HashLink>

          <HashLink smooth to={"/#about"}>
            <span>ABOUT</span>
          </HashLink>

          <HashLink smooth to={"/#contact"}>
            <span  >CONTACT</span>
          </HashLink>
        </div>


        <div className="right" role="button">
          <p>Resume</p> 
          <img src={resume} alt="resume" />
        </div>

      </div>
    </nav>
  )
}

export default Navbar;