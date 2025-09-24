import "../styles/swipper.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// importing images
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/MongoDB.png";
import bootstrap from "../assets/bootstrap.png";
import mui from "../assets/mui.png";
import vscode from "../assets/vscode.png";
import redux from "../assets/Redux.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import socketio from "../assets/socketio.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Swipper() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        grabCursor={true}
        speed={3000} // smooth transition speed (higher = slower scroll
        autoplay={{
            delay: 0, // removes pause
            disableOnInteraction: false,
        }}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
        }}
      >
        <SwiperSlide>
            <div>
                <img src={react}/>
                <p>React js</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={tailwind}/>
                <p>Tailwind</p>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div>
                <img src={nodejs}/>
                <p>Node js</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>   
            <div>
                <img src={mongodb}/>
                <p>Mongo DB</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>   
            <div>
                <img src={redux}/>
                <p>Redux</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>   
            <div>
                <img src={socketio}/>
                <p>Socket IO</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={html}/>
                <p>HTML 5</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={css}/>
                <p>CSS 3</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={js}/>
                <p>Java Script</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={bootstrap}/>
                <p>Bootstrap</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={mui}/>
                <p>Material UI</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={git}/>
                <p>Git</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={github}/>
                <p>Git hub</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={vscode}/>
                <p>VS code</p>
            </div>
        </SwiperSlide>

    </Swiper>
    </>
  );
}
