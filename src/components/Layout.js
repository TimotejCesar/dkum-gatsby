import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import './global.css'
import useSiteMetadata from './SiteMetadata'
import Header from './Header'
import CookieBanner from './CookieBanner'
import favicon from '../img/favicon.ico'

const TemplateWrapper = ({ children, location, pageTitle }) => {
  const { title, description, keywords } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>DKUM - {pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link
          rel="icon"
          sizes="16x16"
          href={favicon}
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
