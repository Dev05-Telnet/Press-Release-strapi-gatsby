import React from "react";
import PropTypes from "prop-types";
import Image from "~/components/image";


const BigBlogCard = ({ releases }) => {
  return (
    <div className="grid grid-cols-8 gap-2 sm:gap-5 w-5/6 sm:w-1/2 m-auto">
      {releases.map(({ node }) => {
        var medias = [...node.images, ...node.vedios, ...node.documents];

        return (
          <div className="bg-white flex flex-col justify-between col-span-8 overflow-hidden transition-shadow duration-500 rounded-none sm:border theme-bg theme-shadow theme-border hover:shadow-xl ease dark:bg-dark-900 sm:rounded-xl xl:col-span-8" key={node.id}>
            <div
              className="relative p-0 rounded-none cursor-pointer sm:rounded-t-xl"
              onclick="feedLinkClick('/tnylea/laravel-livewire-trix-editor-component', '4890', 'tutorial', event, 'Laravel Livewire Trix Editor Component')"
            >
              <div className="flex flex-col">
                <div className="relative block w-full h-full p-0 overflow-hidden sm:rounded-t-md">
                  {/* <img
                    src="https://cdn.devdojo.com/posts/images/July2021/laravel-livewire-trix-editor-component1.jpg"
                    width="1280"
                    height="auto"
                    className="object-cover w-full h-auto"
                    data-src="https://cdn.devdojo.com/posts/images/July2021/laravel-livewire-trix-editor-component1.jpg"
                    alt="Laravel Livewire Trix Editor Component"
                  /> */}
                  <Image
                    alt="Category Image"
                    className="object-cover w-full h-auto"
                    image={medias[0]}
                  />
                </div>

                <div className="w-full px-4 py-6 sm:p-6">
                  <h1 className="text-lg font-medium theme-text">
                    {node.title}
                  </h1>
                  <div className="inline-block mt-2 text-xs opacity-50 theme-text sm:text-sm">
                    {node.description}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-4 pb-6 rounded-none dark:border-dark-800 sm:rounded-b-xl sm:p-6 sm:pt-0">
              <div className="flex items-center space-x-3">
                <a
                  href="tnylea"
                  onclick="window.ignoreDynamicClick = true;"
                  className="flex-shrink-0"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://cdn.devdojo.com/users/April2021/tnylea.jpg"
                    alt=""
                  />
                </a>
                <p className="text-sm font-medium text-gray-900">
                  <a
                    href="tnylea"
                    onclick="window.ignoreDynamicClick = true;"
                    className="hover:underline ignore-dynamic-click"
                  >
                    Tony Lea
                  </a>
                </p>
                <p className="text-sm text-gray-500">20 hours ago</p>
              </div>

              <div className="flex">
                <div>
                  <div
                    className="relative flex items-center justify-center reaction"
                    x-data="{ showReactions: false }"
                  >
                    <div className="rounded-md flex relative justify-between items-center py-1 px-3 cursor-pointer h-8 bg-gray-100 dark:bg-dark-990 hover:bg-blue-100 dark-hover:bg-dark-800">
                      <div className="flex items-center justify-center">
                        <img
                          className="w-4 h-4 mr-2"
                          src="https://cdn.devdojo.com/images/emojis/clap.png"
                        />
                        <img
                          className="w-4 h-4 mr-2"
                          src="https://cdn.devdojo.com/images/emojis/heart_eyes.png"
                        />
                        <span className="text-sm font-medium text-blue-500">
                          3
                        </span>
                      </div>

                      {/* <div x-show="showReactions" style="display: none;">
                    <div className="absolute bottom-0 right-0 select-none">
                      <div className="w-64 p-3 pt-2 mb-10 bg-white rounded-md shadow-xl dark:bg-dark-750 dark:bg-dark-850">
                        <h5 className="mt-1 mb-1 ml-1 text-xs font-medium text-gray-500">
                          Select One:{" "}
                        </h5>
                        <div className="grid grid-cols-5 reactions no-load">
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/like.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/love.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/raised_hands.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/clap.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/beer.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/beers.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/sushi.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/fire.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/unicorn.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/crystal_ball.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/popper.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/smile.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/thinker.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/joy.png"
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex col-span-1 justify-center items-center rounded-md cursor-pointer h-8 w-8 mb-2 hover:bg-blue-100 dark-hover:bg-dark-700">
                            <img
                              src="https://cdn.devdojo.com/images/emojis/heart_eyes.png"
                              className="w-5 h-5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>

                <div className="ml-3">
                  <div className="relative flex items-center justify-center bookmark">
                    <div className="relative flex items-center justify-center w-8 h-8 px-3 py-1 rounded-md cursor-pointer bg-gray-100 dark:bg-dark-800 dark-hover:bg-dark-750 hover:bg-blue-100 text-gray-600">
                      <svg
                        className="absolute w-3 fill-current"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 016-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

BigBlogCard.propTypes = {
  releases: PropTypes.array,
};

export default BigBlogCard;
