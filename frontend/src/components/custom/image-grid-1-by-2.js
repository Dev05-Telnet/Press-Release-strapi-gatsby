import React from "react";
import Image from "~/components/image";

const ImageGrid = ({ medias }) => {
  return (
    <div className="h-52 w-full grid grid-cols-3 grid-rows-2 gap-1">
      <div className="relative col-span-3 row-span-2 md:col-span-2">
        <Image
          alt="Category Image"
          className="absolute inset-0 w-full h-full object-cover bg-gray-100 "
          image={medias[0]}
        />
      </div>
      <div className="relative md:block">
        <Image
          alt="Category Image"
          className="absolute inset-0 w-full h-full object-cover bg-gray-100"
          image={medias[1]}
        />
      </div>
      <div className="relative hidden md:block">
        <Image
          alt="Category Image"
          className="absolute inset-0 w-full h-full object-cover bg-gray-100"
          image={medias[2]}
        />
      </div>
    </div>
  );
};

export default ImageGrid;
