import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import "./section4.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Email = ({ prop, isDark }) => {
  const formData = useRef();

  useEffect(() => {
    gsap.from(prop.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      scrollTrigger: prop.current,
    });
  });

  const handleFormEmial = (e) => {
    e.preventDefault();
    console.log(formData.current);
    emailjs
      .sendForm("service_vvi5ez8", "template_clb6mge", formData.current, {
        publicKey: "QiWUZMP8ki9FmxLQR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    formData.current.reset();
  };
  return (
    <main className="email_main_container" ref={prop}>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Connet me with Email or WhatsApp
      </h1>
      <form
        ref={formData}
        onSubmit={handleFormEmial}
        style={{
          background: isDark ? "black" : "#F2F2F2",
          color: isDark ? "white" : "black",
        }}
      >
        <input type="name" placeholder="Enter Name" name="to_name" />
        <input type="email" placeholder="Enter Email" name="from_name" />
        <textarea name="message" placeholder="Type message here..."></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="whatsapp_div">
        <a
          href="https://wa.me/8433241534?text=Hello How can I help you"
          target="_blank"
        >
          <button
            style={{
              background: isDark ? "black" : "#F2F2F2",
            }}
          >
            WhatsApp Me{"->"}
            <span>
              <FaWhatsapp />
            </span>
          </button>
        </a>
      </div>
    </main>
  );
};

export default Email;
