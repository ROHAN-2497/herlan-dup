/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container divide-y">
        <div className="md:flex mt-20 mb-4">
          <div className="pr-32">
            <img src="/Herlan-Store-Website-Logo.png" alt="" />
            <div className="flex justify-between items-center gap-4 mt-10">
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
          <div className="w-1/2">
            <p className="pb-4">
              Join our newsletter to access all the <br /> benefits.
            </p>
            <p>
              Sign up to receive the latest news & <br /> exclusive offers!
            </p>
            <div className="mt-10">
              <input
                className="border-2 px-2"
                type="text"
                placeholder="Email address"
              />
              <button className="bg-black hover:bg-red-600 text-white font-semibold px-2 py-1 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4">
          {" "}
          <img
            src="/SSLCOMMERZ-Pay-With-logo-All-Size_Aug-21-02-1024x120.png"
            alt=""
          />
        </div>

        <div className="py-4 flex items-center justify-center">
          <p>Copyright Herlan 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
