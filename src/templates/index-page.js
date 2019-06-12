import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Link from "gatsby-link";
import FooterSitemap from "../components/FooterSitemap";

export const IndexPageTemplate = ({
  title,
  header,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="Vsebina">
        <div className="pot">
          <ul className="breadcrumb">
            <li>
              <Link to="/slo/" className="pathway">
                {title}
              </Link>
            </li>
          </ul>
        </div>
        <div className="teloVsebine">
          <div className="item-page">
            <div className="page-header">
              <h1>{header}</h1>
            </div>
            <PageContent content={content} />
          </div>
        </div>
      </section>
      <FooterSitemap />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        header={post.frontmatter.header}
        content={post.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
        header
      }
    }
  }
`;
