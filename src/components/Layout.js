import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import './global.css'
import useSiteMetadata from './SiteMetadata'
import Header from './Header'
import CookieBanner from './CookieBanner'

const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={location} />
        <meta property="og:image" content="../img/logo_og_slv.png" />
        <meta property="og:site" content="DKUM" />
      </Helmet>
      <CookieBanner />
      <div className="platno">
        <Header />
          {children}
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
