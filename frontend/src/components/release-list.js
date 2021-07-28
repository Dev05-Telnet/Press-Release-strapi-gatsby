import React from "react";
import Card from "~/components/styled/card";
import PropTypes from "prop-types";
import Image from "~/components/image";

import CounterWithIconAndText from "~/components/custom/icon-number-text";

const ReleaseList = ({ releases }) => {
  return (
    <div className="grid grid-cols-1 gap-2 max-w-screen-lg m-auto">
      {releases.map(({ node }) => {
        var medias = [...node.images, ...node.vedio, ...node.documents];
        return (
          <Card key={node.id}>
            <div className="h-full grid grid-cols-1 sm:grid-cols-2 sm:px-3 sm:py-12 sm:gap-x-8 pb-8 md:py-3">
              <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 sm:pt-2 pb-3 bg-gradient-to-t from-black sm:bg-none">
                <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
                  {node.releasedate}
                </p>
                <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
                  {node.title}
                </h2>
              </div>
              <div className="col-start-1 row-start-2 px-4">
                <CounterWithIconAndText
                  data={{ average: node.images.length, text: "Images" }}
                />
                <CounterWithIconAndText
                  data={{ average: node.vedio.length, text: "Vedios" }}
                />
                <CounterWithIconAndText
                  data={{
                    average: node.documents.length,
                    text: "Documents",
                  }}
                />
                <hr className="w-16 border-gray-300 hidden sm:block pb-2" />
              </div>
              <div className="col-start-1 row-start-3 space-y-3 px-4">
                <p className="flex items-center text-black text-sm font-medium">
                  <img
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80"
                    alt=""
                    className="w-6 h-6 rounded-full mr-2 bg-gray-100"
                  />
                  Formex watches
                </p>
                <button
                  type="button"
                  className="bg-indigo-100 text-indigo-700 text-base font-semibold px-6 py-2 rounded-lg"
                >
                  Download Zip
                </button>
              </div>
              <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                  <div className="relative col-span-3 row-span-2 md:col-span-2">
                    <Image
                      alt="Category Image"
                      className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                      image={medias[0]}
                    />
                  </div>
                  <div className="relative md:block">
                    <Image
                      alt="Category Image"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                      image={medias[1]}
                    />
                  </div>
                  <div className="relative hidden md:block">
                    <Image
                      alt="Category Image"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                      image={medias[2]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

ReleaseList.propTypes = {
  releases: PropTypes.array,
};

export default ReleaseList;
