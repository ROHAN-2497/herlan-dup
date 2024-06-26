/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div>
            <img src="/Herlan-Store-Website-Logo.png" alt="" />
            <div className="flex items-center">
              {" "}
              <Facebook />
              <Youtube />
              <Instagram />
            </div>
          </div>
          <div>
            <h3>About</h3> <p>About Us</p> <p>Terms & Conditions</p>{" "}
            <p>Privacy Policy</p> <p>Return and Refund Policy</p> <p>Career</p>
          </div>
          <div>
            <h3>Help</h3> <p>Store Locator</p> <p>Contact Us</p>
          </div>
          <div></div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </footer>
  );
};

export default Footer;
