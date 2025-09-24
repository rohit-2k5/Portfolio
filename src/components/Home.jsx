import "../styles/home.scss";

import Button from "./Button.jsx";

import Spline from "@splinetool/react-spline";
import Typewriter from "typewriter-effect";
import {MdOutlineKeyboardDoubleArrowDown} from "react-icons/md"
import { HashLink } from "react-router-hash-link";

function Home({visible}) {
  return (
    <div className="hero">
        <div className="heroLeft">
            <div>
                <h2>Hy, i am Rohit.</h2>
                <h3>i'm a</h3>
                <span>
                  <Typewriter 
                      options={{
                        strings: ["Frontend developer </>", "Backend developer </>"],
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        deleteSpeed: 60,
                      }}
                  />
                </span>
                <p>
                  Check out my latest projects , contact me and let's connect,<br /> 
                  download my resume to see more..
                </p>
                <div className="mainHashContainer">
                  <HashLink smooth to={'/#projects'} ><Button text='Projects'></Button></HashLink>
                  <HashLink smooth to={'/#skills'}><button className="btn2"><MdOutlineKeyboardDoubleArrowDown/></button></HashLink>
                </div>
            </div>
        </div>

        <div className="heroRight">
            <div className="ThreeDbox">
                <div className="one">
                    {visible === "true" ? <Spline scene="https://prod.spline.design/md-zUzPCY01Qv48I/scene.splinecode"/> : <></>}
                </div>

                <div className="two" ></div>
            </div>
        </div>
    </div>
  )
}

export default Home;