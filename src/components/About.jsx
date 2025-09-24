import "../styles/about.scss";

import myImg from "../assets/me.jpeg";

function About() {
  return (
    <div className='about' id="about">
      <div className="aboutMain">
        <div className="aboutLeft">
          <div className="photoContainer">
            <div className="photoPlaceholder">
              <span className="photoIcon">
                <img src={myImg} alt="me" />
              </span>
            </div>
          </div>
          <h2 className="name">Rohit Sharma</h2>
          <p className="title">Full Stack Developer</p>
        </div>
        <div className="aboutRight">
          <div className="description">
            <h3 className="sectionTitle">About Me</h3>
            <p className="intro">
              I'm a passionate Full Stack Developer with expertise in the MERN stack, 
              dedicated to creating innovative and user-friendly web applications. 
              With a strong foundation in both frontend and backend technologies, 
              I bring ideas to life through clean, efficient code.
            </p>
            <div className="education">
                <h4>Education</h4>
                <ul>
                  <li>B.tec CSE: LPU , PUNJAB | GPA: 8.1/10</li>
                  <li>12th: Gyan Deep Public School, BIHAR | 73%</li>
                  <li>10th: Param Gyan Niketan, BIHAR | 82%</li>
                </ul>
            </div>
            <blockquote className="quote">
              "The magic you're looking for , is'nt the work you're avoiding"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About