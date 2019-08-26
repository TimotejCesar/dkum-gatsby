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
            {/* <PageContent content={content} /> */}
            <table class="OrgStat">
              <tbody>
                <tr>
                  <th rowspan="2">Organizacija</th>
                  <th colspan="2">Diplome</th>
                  <th colspan="2">Magisteriji</th>
                  <th colspan="2">Doktorati</th>
                  <th colspan="2">Ostalo</th>
                  <th colspan="2">Skupaj</th>
                </tr>
                <tr>
                  <th class="sub">Vseh</th>
                  <th class="sub">Novih</th>
                  <th class="sub">Vseh</th>
                  <th class="sub">Novih</th>
                  <th class="sub">Vseh</th>
                  <th class="sub">Novih</th>
                  <th class="sub">Vseh</th>
                  <th class="sub">Novih</th>
                  <th class="sub">Vseh</th>
                  <th class="sub">Novih</th>
                </tr>
                <tr>
                  <td class="naziv">EPF - Ekonomsko-poslovna fakulteta</td>
                  <td
                    class="Search"
                    onclick="location.href='https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=dip&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv'"
                    title="Sproži iskanje - diplome EPF"
                  >
                    <a href="https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=dip&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv">
                      7.442
                    </a>
                  </td>
                  <td
                    class="Rss"
                    onclick="location.href='https://dk.um.si/rss.php?o=2&amp;v=dip&amp;lang=slv'"
                    title="Naroči na RSS - diplome EPF"
                  >
                    <span class="RssLink">3</span>
                  </td>
                  <td
                    class="Search"
                    onclick="location.href='https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=mag&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv'"
                    title="Sproži iskanje - magisteriji EPF"
                  >
                    <a href="https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=mag&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv">
                      1.637
                    </a>
                  </td>
                  <td
                    class="Rss"
                    onclick="location.href='https://dk.um.si/rss.php?o=2&amp;v=mag&amp;lang=slv'"
                    title="Naroči na RSS - magisteriji EPF"
                  >
                    <span class="RssLink">12</span>
                  </td>
                  <td
                    class="Search"
                    onclick="location.href='https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=dok&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv'"
                    title="Sproži iskanje - doktorati EPF"
                  >
                    <a href="https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=dok&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv">
                      94
                    </a>
                  </td>
                  <td
                    class="Rss"
                    onclick="location.href='https://dk.um.si/rss.php?o=2&amp;v=dok&amp;lang=slv'"
                    title="Naroči na RSS - doktorati EPF"
                  >
                    <span class="RssLink">0</span>
                  </td>
                  <td
                    class="Search"
                    onclick="location.href='https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=ostalo&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv'"
                    title="Sproži iskanje - druga gradiva EPF"
                  >
                    <a href="https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vrsta=ostalo&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv">
                      1.604
                    </a>
                  </td>
                  <td>&nbsp;</td>
                  <td
                    class="Search"
                    onclick="location.href='https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv'"
                    title="Sproži iskanje - vsa gradiva EPF"
                  >
                    <a href="https://dk.um.si/Iskanje.php?type=napredno&amp;niz0=&amp;vir=2&amp;chkFullOnly=on&amp;lang=slv">
                      10.777
                    </a>
                  </td>
                  <td
                    class="Rss"
                    onclick="location.href='https://dk.um.si/rss.php?o=2&amp;v=vse&amp;lang=slv'"
                    title="Naroči na RSS - vsa gradiva EPF"
                  >
                    <span class="RssLink">15</span>
                  </td>
                </tr>
              </tbody>
            </table>
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

const IndexPage = ({ data, pathContext: { locale, slug } }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle={post.frontmatter.title} locale={locale} slug={slug}>
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
