import "../styles/projects.scss";
import { useEffect, useRef } from "react";
import ProjectItem from "./ProjectItem.jsx";

// images import 
import p1i1 from "../assets/qc1.png";
import p1i2 from "../assets/qc2.png";
import p1i3 from "../assets/qc3.jpeg";

import p2i1 from "../assets/z1.png";
import p2i2 from "../assets/z2.png";
import p2i3 from "../assets/z3.png";

import p3i1 from "../assets/w1.png";
import p3i2 from "../assets/w2.png";
import p3i3 from "../assets/w3.png";

import p4i1 from "../assets/t1.png";
import p4i2 from "../assets/t2.png";
import p4i3 from "../assets/t3.png";

function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll(".pCol"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            // Remove class when out of view so it can animate again next time
            entry.target.classList.remove("in-view");
          }
        });
      },
      { root: null, threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projectMain" id="projects">
      <div className="pContainer" ref={containerRef}>
        <div className="row connect">
          <div className="pCol left" style={{ ["--i"]: 0 }}>
            <ProjectItem 
              img1={p1i1} 
              img2={p1i2} 
              img3={p1i3} 
              name='Quick Connect' 
              description="A lightweight video calling web app with real-time signaling and smooth peer connections."
              githubLink="https://github.com/rohit-2k5/QuickConnect"
              liveLink="https://quickconnectfrontend.onrender.com/" 
            />
          </div>
          
          

          <div className="center-line" aria-hidden="true" />
          <div className="pCol right" style={{ ["--i"]: 1 }}>
            <ProjectItem 
              img1={p2i1} 
              img2={p2i2} 
              img3={p2i3} 
              name='Trade Vista' 
              description="A stock trading plateform where we can buy and sell stock can see holding, orders and charts..." 
              githubLink="https://github.com/rohit-2k5/Stock-Trading-Plateform"
              liveLink="https://quickconnectfrontend.onrender.com/"
            />
          </div>
        </div>

        <div className="row connect">
          <div className="pCol left" style={{ ["--i"]: 2 }}>
            <ProjectItem 
              img1={p3i1} 
              img2={p3i2} 
              img3={p3i3} 
              name='Wander Lust' 
              description="A Hotel Booking plateform where you can rent your place , or rent a place for days just like air bnb."
              githubLink="https://github.com/rohit-2k5/wanderlust"
              liveLink="https://deltaproject-1-rjaj.onrender.com/listings"
            />
          </div>
          <div className="center-line" aria-hidden="true" />
          <div className="pCol right" style={{ ["--i"]: 3 }}>
            <ProjectItem
              img1={p4i1} 
              img2={p4i2} 
              img3={p4i3} 
              name='Redux Shopping Cart' 
              description="Built a shopping cart using Redux toolkit for better state management and golbal state variable."
              githubLink="https://github.com/rohit-2k5/shopping_cart"
              liveLink="https://shoppingcart-0hsz.onrender.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;