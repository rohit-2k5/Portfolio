import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Project from "./Projects.jsx";
import Navbar from "./Navbar.jsx";

// on scroll
import { useInView } from "react-intersection-observer";

function Hero() {
  
  const {ref: homeRef, inView: homeInView} = useInView({threshold: 0.8});
  const {ref: skillsRef , inView: skillsInView} = useInView({threshold: 0.3});
  const {ref: projectsRef, inView: projectsInView} = useInView({threshold: 0.3});
  const {ref: aboutRef, inView: aboutInView} = useInView({threshold: 0.3});
  const {ref: contactRef, inView: contactInView} = useInView({threshold: 0.3});

  let visible = "false";
  if(homeInView) visible = "true";

  let activeSection = "home";
  if(skillsInView) activeSection = "SKILLS";
  if(projectsInView) activeSection = "PROJECTS";
  if(aboutInView) activeSection  = "ABOUT";
  if(contactInView) activeSection = "CONTACT";

  return (
      <>
        <Navbar activeSection={activeSection}/>
        
        <section ref={homeRef}> 
          <Home visible={visible} />
        </section>
        
        <section ref={skillsRef}>
          <Skills/>
        </section>
        
        <section ref={projectsRef}>
          <Project />
        </section>
        
        <section ref={aboutRef}>
          <About/>
        </section>
        
        <section ref={contactRef}>
          <Contact/>
        </section>
        
      </>
    )
}

export default Hero;