/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex mt-20">
          <div className="">
            <img src="/Herlan-Store-Website-Logo.png" alt="" />
            <div className="flex items-center">
              {" "}
              <Facebook />
              <Youtube />
              <Instagram />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="font-bold mb-2">About</h3>{" "}
            <p className="py-2">About Us</p> <p>Terms & Conditions</p>{" "}
            <p className="py-2">Privacy Policy</p>{" "}
            <p>Return and Refund Policy</p> <p className="py-2">Career</p>
          </div>
          <div className="w-1/2">
            <h3 className="font-bold mb-2">Help</h3>{" "}
            <p className="py-2">Store Locator</p> <p>Contact Us</p>
          </div>
          <div className="w-full">
            <p>Join our newsletter to access all the benefits.</p>
            <p>Sign up to receive the latest news & exclusive offers!</p>
            <div className="mt-10">
              <input
                className="border-2"
                type="text"
                placeholder="Email address"
              />
              <button className="bg-black hover:bg-red-500 text-white font-semibold px-2 py-1 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </footer>
  );
};

export default Footer;
