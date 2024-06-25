/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

const ProductSeling = () => {
  return (
    <div className="bg-white">
      <img src="https://placehold.co/600" alt="" className="object-cover" />

      <div className="p-1">
        <h5 className="text-sm">HERLAN</h5>
        <p className="text-xs">Nior Super Long Lasting Eyeliner – Soft White</p>
        <p className="text-sm mt-1">$ 1,300</p>
      </div>
    </div>
  );
};

export default ProductSeling;
