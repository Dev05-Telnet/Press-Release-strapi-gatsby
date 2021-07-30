import React from "react";
import Image from "~/components/image";

const SmallBlogCard = ({data}) => {
  console.log(data)
  var medias = [...data.images, ...data.vedio, ...data.documents];

  return (
    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
      <a href="#_" className="block w-full">
        <Image
            alt="Category Image"
            className="object-cover mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
            image={medias[0]}
          />
      </a>
      <div className="bg-purple-500 items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
        <span>Lifestyle</span>
      </div>
      <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
        <a href="#_">{data.title}</a>
      </h2>
      <p className="text-sm text-gray-500 line-clamp-3">{data.description}
      </p>
      <p className="pt-2 text-xs font-medium">
        <a href="#_" className="mr-1 underline">
          Mary Jane
        </a>{" "}
        · <span className="mx-1">{data.releasedate}</span> ·{" "}
        <span className="mx-1 text-gray-600">3 min. read</span>
      </p>
    </div>
  );
};


export default SmallBlogCard;