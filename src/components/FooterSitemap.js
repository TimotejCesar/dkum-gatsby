import React from "react";
import Link from "gatsby-link";
import partnerjiImg_sl from "../img/partnerji_slv.gif";
import partnerjiImg_en from "../img/partnerji_eng.gif";
import { intlShape, injectIntl } from "react-intl";

const LinksSlo = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h3>Več o DKUM</h3>
            <ul className="SiteMapList">
              <li>
                <Link to="/slo/uvodnik">Uvodnik</Link>
              </li>
              <li>
                <Link to="/slo/knjiznice-um/">Knjižnice UM</Link>
              </li>
              <li>
                <a href="https://dk.um.si/info/index.php/slo/2-vsebine-si/19-oddaja-studentskih-del">
                  Oddaja študentskih del
                </a>
              </li>
            </ul>
          </td>
          <td>
            <h3>Katalog DKUM</h3>
            <ul className="SiteMapList">
              <li>
                <a href="https://dk.um.si/Iskanje.php?langID=slv">Iskanje</a>
              </li>
              <li>
                <a href="https://dk.um.si/Brskanje.php?langID=slv">Brskanje</a>
              </li>
              <li>
                <a href="https://dk.um.si/Statistika.php?langID=slv">
                  Statistika
                </a>
              </li>
            </ul>
          </td>
          <td>
            <h3>Disertacije UM v PQDT</h3>
            <ul className="SiteMapList">
              <li>
                <Link to="/slo/pqdt">Oddaja del v PQDT</Link>
              </li>
            </ul>
          </td>
          <td>
            <h3>Drugi viri</h3>
            <ul className="SiteMapList">
              <li>
                <a href="http://www.cobiss.si/scripts/cobiss?command=CONNECT&amp;base=COBIB">
                  COBISS
                </a>
              </li>
              <li>
                <a href="http://sicris.izum.si/">SICRIS</a>
              </li>
              <li>
                <a href="http://splet02.izum.si/cobiss/BibPersonal.jsp?init=t&amp;sid=39DBD4166BCE66938D293C7372E11029">
                  Izpis bibliografij
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const LinksEng = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h3>More on DKUM</h3>
            <ul className="SiteMapList">
              <li>
                <a
                  href="https://dk.um.si/info/index.php/eng/introduction"
                  hreflang="en"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="https://dk.um.si/info/index.php/eng/component/content/article?id=24"
                  hreflang="en"
                >
                  UM libraries
                </a>
                <a href="https://dk.um.si/info/index.php/eng/component/content/article?id=5">
                  <br />
                </a>
              </li>
              <li>
                <a
                  href="https://dk.um.si/info/index.php/eng/upload-document"
                  hreflang="en"
                >
                  Upload document
                </a>
                <a href="#">
                  <br />
                </a>
              </li>
            </ul>
          </td>
          <td>
            <h3>DKUM catalog</h3>
            <ul className="SiteMapList">
              <li>
                <a href="https://dk.um.si/Iskanje.php?langID=eng">Search</a>
              </li>
              <li>
                <a href="https://dk.um.si/Brskanje.php?langID=eng">Browsing</a>
              </li>
              <li>
                <a href="https://dk.um.si/Statistika.php?langID=eng">
                  Statistics
                </a>
              </li>
            </ul>
          </td>
          <td>
            <h3>Other sources</h3>
            <ul className="SiteMapList">
              <li>
                <a href="http://www.cobiss.si/scripts/cobiss?command=CONNECT&amp;base=COBIB">
                  COBISS
                </a>
              </li>
              <li>
                <a
                  href="https://dk.um.si/info/index.php/eng/component/content/article?id=23"
                  hreflang="en"
                >
                  Proquest Dissertations and Theses
                </a>
                <a href="http://dkum2.uni-mb.si/podrocje.aspx?id=444">
                  <br />
                </a>
              </li>
              <li>
                <a href="http://sicris.izum.si/">SICRIS</a>
              </li>
              <li>
                <a href="http://splet02.izum.si/cobiss/BibPersonal.jsp?init=t&amp;sid=39DBD4166BCE66938D293C7372E11029">
                  Bibliographies
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const FooterSitemap = ({ intl }) => {
  return (
    <section id="FooterSiteMap">
      <div className="customfootersitemap">
        {
          intl.locale === 'sl' ? <LinksSlo/> : <LinksEng/>
        }
        <img
          useMap="#partnerji"
          src={intl.locale === "sl" ? partnerjiImg_sl : partnerjiImg_en}
          style={{ borderTop: "solid 1px silver" }}
          alt="Partnerji projekta"
          width="970"
          height="116"
        />
        <map name="partnerji">
          <area
            title="Univerza v Mariboru"
            alt="Univerza v Mariboru"
            shape="rect"
            coords="522,25,670,105"
            href="http://www.um.si/"
          />
          <area
            title="Univerza v Ljubljani"
            alt="Univerza v Ljubljani"
            shape="rect"
            coords="685,25,780,105"
            href="http://www.uni-lj.si/"
          />
          <area
            title="Univerza na Primorskem"
            alt="Univerza na Primorskem"
            shape="rect"
            coords="795,25,855,105"
            href="http://www.upr.si/"
          />
          <area
            title="Univerza v Novi Gorici"
            alt="Univerza v Novi Gorici"
            shape="rect"
            coords="870,25,950,105"
            href="http://www.ung.si/"
          />
        </map>
      </div>
    </section>
  );
};

FooterSitemap.propTypes = {
  intl: intlShape
};

export default injectIntl(FooterSitemap);
