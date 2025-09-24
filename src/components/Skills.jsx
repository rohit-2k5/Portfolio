import "../styles/skills.scss";
import Swipper from "./Swipper";

import { HashLink } from "react-router-hash-link";
import { RiScrollToBottomLine } from "react-icons/ri";


function Skills() {
  return (
    <div className='skills' id="skills">
      <div className="skillsContainer">
        
        <div className="skillsHeader"> 
          <h2 className="skillsTitle">Skills</h2>
          <p className="skillsSubtitle">Technologies I Work With</p>
          <div className="titleUnderline"></div>
        </div>

        <div className="skillsCarousel"> 
          <Swipper/>
        </div>

        <div className="scrollIndicator">
          <HashLink smooth to={'/#projects'}>
            <button className="scrollBtn">
              <RiScrollToBottomLine className="scrollIcon"/>
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  )
}

export default Skills;