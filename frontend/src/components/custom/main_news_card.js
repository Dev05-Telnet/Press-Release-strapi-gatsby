import React from "react";

import { Link } from "gatsby";
import ThreeLineDate from "./three-line-date";

import Image from "~/components/image";

const MainNewsCard = ({ news }) => {
  return (
    <>
      <div className="flex p-2 divide-x ">
        <ThreeLineDate dateString={news.releaseDate} className="m-4" />

        <div className="p-2 w-full">
          <Link
            to={`/press-release/${news.id}`}
            key={news.id}
            className=" text-3xl font-semibold leading-tight uppercase
                text-black hover:text-blue-800 "
          >
            {news.title}
          </Link>

          <div className="pt-4 text-gray-500 line-clamp-3">
            {news.description}
          </div>

          <div className="flex flex-wrap ">
            {["Six", "Seven", "Eight"].map((tag) => {
              return (
                <Link
                  to={`/tags/${tag.toLowerCase()}`}
                  className="uppercase m-2 bg-gray-200 rounded-md px-2 py-0.5 text-xs hover:bg-blue-800 hover:text-white "
                  key={tag}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Image
        alt="Category Image"
        className="w-full object-cover bg-gray-100 mb-3"
        image={news.images[0]}
      />

      <div className="w-full grid grid-cols-4">
        {[...news.images, ...news.vedios, ...news.documents].map(
          (file, index) => {
            if (index === 0 || index > 8) return;
            return (
              <Image
                alt="Category Image"
                className="w-full object-cover bg-gray-100 mb-3"
                image={file}
                key={"image"+index}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default MainNewsCard;
