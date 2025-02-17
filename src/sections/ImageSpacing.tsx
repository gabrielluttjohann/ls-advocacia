import img from "@/assets/logo/img.png";
import Image from "next/image";
import React from "react";

const ImageSpacing = () => {
  return (
    <div className="lg:h-[500px] md:h-[250px] h-[125px] w-full    ">
      <Image alt="Livros" height={500} width={500} src={img.src} className="w-full h-full bg-cover bg-no-repeat" />
       </div>

  );
};

export default ImageSpacing;
