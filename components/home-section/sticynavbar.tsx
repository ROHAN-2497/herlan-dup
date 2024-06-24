import Image from "next/image";
import React from "react";
import Menu from "../ui/menu";

const SticyNavbar = () => {
  return (
    <div className="py-4">
      <div className="container flex">
        {" "}
        <div>
          <Image
            width={100}
            height={100}
            src="/Herlan-Store-Website-Logo.png"
            alt=""
          />
        </div>
        <div>
          <Menu />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SticyNavbar;