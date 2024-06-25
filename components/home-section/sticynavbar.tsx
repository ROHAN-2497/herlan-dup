import Image from "next/image";
import React from "react";
import Menu from "../ui/menu";
import { ShoppingCart } from "lucide-react";

const SticyNavbar = () => {
  return (
    <div className="py-4 sticky">
      <div className="container flex items-center justify-between">
        {" "}
        <div>
          <Image
            width={100}
            height={100}
            src="/Herlan-Store-Website-Logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <Menu />
          <p className="text-red-500">Herlan Exclusive</p>
        </div>
        <div className="flex gap-5">
          <p>Career</p>
          <p>Blog</p>{" "}
          <div className="flex gap-2">
            <p>$</p>
            <p>0</p>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SticyNavbar;
