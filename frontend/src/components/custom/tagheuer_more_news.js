import React from "react";
import PropTypes from "prop-types";

import NewsCard from "./news_card";



const TagheuerMoreNews = ({ releases }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
      {releases.map(({ node }) => {
        return <NewsCard news={node} />;
      })}
    </div>
  );
};

TagheuerMoreNews.propTypes = {
  releases: PropTypes.array,
};

export default TagheuerMoreNews;
