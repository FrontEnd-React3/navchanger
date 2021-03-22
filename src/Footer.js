import React, { useEffect, useState } from "react";
import "./Footer.css";
const Footer = () => {
  const [show, setShow] = useState(false);
  const controlFooter = () => {
    console.log("Y" + window.scrollY);
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlFooter);
    return () => {
      window.removeEventListener("scroll", controlFooter);
    };
  }, []);
  return <div className={`foot ${show && "foot__red"}`}></div>;
};

export default Footer;
