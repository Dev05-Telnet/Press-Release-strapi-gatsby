import React from "react";
import PropTypes from "prop-types";

import NewsCard from "./news_card";
import MainNewsCard from "./main_news_card";

const TagheuerMainNews = ({ releases }) => {
  return (
    <div className="grid grid-cols-6 gap-4 m-auto">
      {/* Main news section starts from here */}
      <div className="col-span-6 lg:row-span-3 lg:col-span-4 bg-white">
       <MainNewsCard news = {releases[0].node}/>
      </div>
      {/* Right side news section starts from here */}
      {releases.map(({ node }, index) => {
        if (index === 0) return;
        return (
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <NewsCard news={node} />
          </div>
        );
      })}
    </div>
  );
};

TagheuerMainNews.propTypes = {
  releases: PropTypes.array,
};

export default TagheuerMainNews;
