import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'
import Layout from '../../components/Layout'

const ContentPagePreview = ({ entry, widgetFor }) => (
  <Layout>
    <ContentPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
  </Layout>
)

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContentPagePreview
