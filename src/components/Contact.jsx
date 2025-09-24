import "../styles/contact.scss";

import { BiLogoGmail } from "react-icons/bi";
import Loader from "./buttons/Loader.jsx";
import Socials from "./buttons/Socials.jsx";

import {toast} from "react-hot-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

function Contact() {

  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) =>{
    setIsSending(true);
    e.preventDefault();

    emailjs.sendForm("service_xzbqh24","template_mauael3",formRef.current, "10ot2CCpLaE38aeN5")
    .then(
      (result) => {
        toast.success("Email sent Successfully", {duration: 4000});
        setIsSending(false);
        formRef.current.reset();
      },
      (error) =>{
        toast.error("somthing went wrong , please try again", {duration: 4000});
        setIsSending(false);
      }
    )
  }

  return (
    <div className='container' id="contact">
      <div className="containerMain">

        <div className="left">
          <div className="form">
            <div className="textAndMailLogo"><BiLogoGmail /><h3>Gmail</h3></div>
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your name" required/>
              <input type="text" name="email" placeholder="Your email" required/>
              <textarea name="message" placeholder="Message..."  required />
              <button type="submit">{isSending ? <Loader/> : "Send"}</button>
            </form>
          </div>
        </div>

        <div className="right">
          <div className="connectWithMe">
          <Socials/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact