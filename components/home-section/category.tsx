import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="container">
      <div>
        <Image
          className="rounded-s-full ro"
          width={50}
          height={80}
          src="/Home-Banner-BOS-1440x375-1-1536x400.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Category;
