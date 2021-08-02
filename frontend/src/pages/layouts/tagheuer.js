import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import PageHeading from "~/components/styled/page-heading";
import ReleaseList from "~/components/release-list";
import TagheuerMainNews from "../../components/custom/tagheuer_main_news";
import TagheuerMoreNews from "../../components/custom/tagheuer_more_news";

const Tagheuer = ({ data }) => {
  const pressReleases = data.allStrapiPressRelease.edges;
  // const pressReleases = data.edges;
  const seo = { title: "Formex News room" };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Tagheuer Main News</PageHeading>
      <TagheuerMainNews releases={pressReleases} />
      <PageHeading>Tagheuer More News Section</PageHeading>
      <TagheuerMoreNews releases={pressReleases} />
      <PageHeading>Formex News Room</PageHeading>
      <ReleaseList releases={pressReleases} />
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

export default Tagheuer;
