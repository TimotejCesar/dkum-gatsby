import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import './global.css'
import useSiteMetadata from './SiteMetadata'
import Header from './Header'
import CookieBanner from './CookieBanner'
import favicon from '../img/favicon.ico'
import { IntlProvider, addLocaleData } from 'react-intl'

import enData from 'react-intl/locale-data/en'
import slData from 'react-intl/locale-data/sl'

import en from '../i18n/en.json'
import sl from '../i18n/sl.json'

const messages = { en, sl }

addLocaleData([...enData, ...slData])

const Layout = ({ children, slug, pageTitle, locale }) => {
  const { title, description, keywords, siteUrl } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang={locale} />
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
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={siteUrl + slug} />
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

const TemplateWrapper = ({ children, slug, pageTitle, locale }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout
        children={children}
        pageTitle={pageTitle}
        locale={locale}
        slug={slug}
      />
    </IntlProvider>
  )
}

export default TemplateWrapper
