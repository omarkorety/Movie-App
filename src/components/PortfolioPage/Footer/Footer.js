import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCocktail,
  faCoffee,
  faCalculator,
  faEnvelope,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawsome/free-brands-svg-icons";

import ContactBtn from "../ContactMe/Contact";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between flex-wrap">
      <div>
        <div>Get In Touch</div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> : yasser@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faAddressCard} /> : +011213548
        </div>
      </div>
      <div>
        <ContactBtn />
      </div>
      <div className="copyRight">
        <div>CopyRight &copy; 2022</div>
        <div className="d-flex">
          <div className="mx-2">
            <FontAwesomeIcon icon={faCocktail} />
          </div>
          <div className="mx-2">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="mx-2">
            <FontAwesomeIcon icon={faCalculator} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
