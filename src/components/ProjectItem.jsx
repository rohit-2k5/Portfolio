import "../styles/projectItem.scss";

import ProjectSwiper from "./ProjectSwiper";

// button import 
import GitHubBtn from "./buttons/GithubBtn";
import DemoBtn from "./buttons/Demobtn";


function ProjectItem({img1, img2, img3, name='na', description='na', githubLink, liveLink}) {
  return (
    <div className="pItem">
        <div className="up">
            <ProjectSwiper img1={img1} img2={img2} img3={img3} />
        </div>
        <div className="down">
            <div className="btnBox">
                <a target="blank" className="githubLink" href={githubLink}><GitHubBtn/></a> 
                <a target="blank" href={liveLink}><DemoBtn text="visit" height='h-10' width="w-20"/></a>
            </div>

            <div className="description">
                <h3 className="project-title">{name}</h3>
                <p className="project-summary">
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem;