import React from "react";
import Link from "gatsby-link"
import partnerjiImg from '../img/partnerji_slv.gif'

const FooterSitemap = () => {
  return (
    <section id="FooterSiteMap">
      <div className="customfootersitemap">
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Več o DKUM</h3>
                <ul className="SiteMapList">
                  <li>
                    <Link to="/slo/uvodnik">
                      Uvodnik
                    </Link>
                  </li>
                  <li>
                    <Link to="/slo/knjiznice-um/">
                      Knjižnice UM
                    </Link>
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
                    <a href="https://dk.um.si/Iskanje.php?langID=slv">
                      Iskanje
                    </a>
                  </li>
                  <li>
                    <a href="https://dk.um.si/Brskanje.php?langID=slv">
                      Brskanje
                    </a>
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
                    <Link to="/slo/pqdt">
                      Oddaja del v PQDT
                    </Link>
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
        <img
          useMap="#partnerji"
          src={partnerjiImg}
          style={{borderTop: 'solid 1px silver'}}
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

export default FooterSitemap;
