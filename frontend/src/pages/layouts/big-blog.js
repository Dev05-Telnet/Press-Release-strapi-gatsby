import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import PageHeading from "~/components/styled/page-heading";
import BigBlogCard from "../../components/custom/big_blog_card";

const BigBlogLayout = ({ data }) => {
  const pressReleases = data.allStrapiPressRelease.edges;
  // const pressReleases = data.edges;
  const seo = { title: "Formex News room" };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Big Blog Card</PageHeading>
      <BigBlogCard releases={pressReleases} />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiPressRelease(
      sort: { fields: releaseDate, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          title
          description
          releaseDate(formatString: "DD MMM YYYY")
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
          vedios {
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

export default BigBlogLayout;
