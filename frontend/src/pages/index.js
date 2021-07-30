import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import PageHeading from "~/components/styled/page-heading";
import HeroRightImage from "../components/custom/hero-right-image";
import SmallBlogCard from "../components/custom/small-blog-card";

const IndexPage = ({ data }) => {
  const pressReleases = data.allStrapiPressRelease.edges;
  // const pressReleases = data.edges;
  const seo = { title: "Formex News room" };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>New Style</PageHeading>

      <div className="bg-white w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <HeroRightImage data={pressReleases[0]} />
        <div className="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          {pressReleases.map(({ node }, index) => {
            return <SmallBlogCard data={node} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiPressRelease(
      sort: { fields: releasedate, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          title
          description
          releasedate(formatString: "DD MMM YYYY")
          products {
            id
            title
            slug
          }
          images {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
          vedio {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
          documents {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
