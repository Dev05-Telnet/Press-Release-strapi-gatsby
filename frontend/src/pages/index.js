import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import CategoryList from "~/components/category-list";
import PageHeading from "~/components/styled/page-heading";

const IndexPage = () => {
  return (
    <Layout>
      <div>Demo Home page</div>
      <p>Working on this page</p>
    </Layout>
  );
};

export default IndexPage;
