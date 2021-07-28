import React from "react";

import ThreeLineDate from "../custom/three-line-date";
import ImageGrid from "../custom/image-grid-1-by-2";
import { Link } from "gatsby";

const ReadMoreSection = ({ node }) => {
  return (
    <div className="pl-16">
      <Link
        to={`/press-release/${node.id}`}
        key={node.id}
        className="flex float-left text-sm m-auto hover:text-black text-blue-800"
      >
        READ MORE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 m-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div className="flex float-right text-gray-300 group-hover:text-blue-400 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-2 hover:text-blue-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-2 hover:text-blue-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const NewsCard = ({ news }) => {
  console.log("news description")
  console.log(news.description);
  var medias = [...news.images, ...news.vedio, ...news.documents];
  return (
    <div className="group w-full flex flex-col max-w-lg mx-auto bg-white p-2 rounded-sm shadow hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <ImageGrid medias={medias} />
      <div className="flex p-2 divide-x ">
        <ThreeLineDate dateString={news.releasedate} />
        <div className="p-2 w-full">
          <Link
            to={`/press-release/${news.id}`}
            key={news.id}
            className="top-0 block mt-1 font-normal leading-tight uppercase
                  text-black hover:text-blue-800"
          >
            {news.title}
          </Link>
          <div className="flex flex-wrap mt-3">
            {["Six", "Seven", "Eight"].map((tag) => {
              return (
                <Link
                  to={`/tags/${tag.toLowerCase()}`}
                  className="uppercase mt-2 mr-2 bg-gray-200 rounded-md px-2 py-0.5 text-xs hover:bg-blue-800 hover:text-white "
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <ReadMoreSection node={news} />
    </div>
  );
};

export default NewsCard;
