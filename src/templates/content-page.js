import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Link from 'gatsby-link'

export const ContentPageTemplate = ({ title, path, header, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="Vsebina">
        <div className="pot">
            <ul className="breadcrumb">
                <li>
                    <Link to="/slo/" className="pathway">Prva stran</Link>
                    <span className="divider"> &gt; </span>
                </li>
                <li>
                    <Link to={path} className="pathway pathway-last">{title}</Link>
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
  )
}

ContentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContentPage = ({ data, pathContext: {locale} }) => {
  const { markdownRemark: post } = data

  console.log("content page locale: " + locale);

  return (
    <Layout pageTitle={post.frontmatter.title} locale={locale}>
      <ContentPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        header={post.frontmatter.header}
        content={post.html}
      />
    </Layout>
  )
}

ContentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContentPage

export const contentPageQuery = graphql`
  query ContentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
        header
      }
    }
  }
`
