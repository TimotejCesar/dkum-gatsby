import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContentPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section class="Vsebina">
        <div class="pot">
            <ul class="breadcrumb">
                <li>
                    <a href="https://dk.um.si/info/index.php/slo/" class="pathway">Prva stran</a>
                    <span class="divider"> &gt; </span>
                </li>
                <li>
                    <a href="https://dk.um.si/info/index.php/slo/uvodnik" class="pathway pathway-last">{title}</a>
                </li>
            </ul>
          </div>
          <div class="teloVsebine">
            <div class="item-page">
              <div class="page-header">
                <h1>{title}</h1>
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

const ContentPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContentPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
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
      }
    }
  }
`
