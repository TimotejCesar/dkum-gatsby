import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import um_logo from "../img/logotip_um2.png"
import looking_glass from "../img/gosearch15.png"

const Header = ({ siteTitle }) => (
  <header>       
        <div id="zgornjiDelGlave">
          <div id="logo">
            <Link href="/" title="Pojdi na prvo stran DKUM">
              <img src={um_logo} alt="Logotip UM"/>
            </Link>
          </div>

          <div id="topMenu">
            <div className="custom">
              <div>
                <a href="https://dk.um.si/info/index.php/slo">SLO</a> | 
                <a href="https://dk.um.si/info/index.php/eng">ENG</a> | 
                <a href="https://dk.um.si/cookies.php">Piškotki in zasebnost</a>
              </div>
              <div className="iskalnoPolje">
                <input id="hitriIskalnik" onkeydown="HitroIskanje_onKeyDown(event, 'slv');"
                      onfocus="HitroIskanje_onFocus(event);" onblur="HitroIskanje_onBlur(event);" type="text"
                      value="ISKANJE PO KATALOGU" title="Iskanje po katalogu"/>
                <img src={looking_glass} id="hitroIskanjeLupa"
                    onclick="HitroIskanje_OnLupaClick(event, 'slv');" alt="Lupa" title="Išči"/>
              </div>


            <select id="iskaniVir" title="Vir iskanja">
              <option value="dk" selected="selected">DKUM</option>
              <option value="2">&nbsp;&nbsp;&nbsp;&nbsp;EPF - Ekonomsko-poslovna fakulteta</option>
              <option value="19">&nbsp;&nbsp;&nbsp;&nbsp;FE - Fakulteta za energetiko</option>
              <option value="3">&nbsp;&nbsp;&nbsp;&nbsp;FERI - Fakulteta za elektrotehniko, računalništvo in informatiko
              </option>
              <option value="9">&nbsp;&nbsp;&nbsp;&nbsp;FF - Filozofska fakulteta</option>
              <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;FGPA - Fakulteta za gradbeništvo, prometno inženirstvo in
                arhitekturo</option>
              <option value="13">&nbsp;&nbsp;&nbsp;&nbsp;FKBV - Fakulteta za kmetijstvo in biosistemske vede</option>
              <option value="6">&nbsp;&nbsp;&nbsp;&nbsp;FKKT - Fakulteta za kemijo in kemijsko tehnologijo</option>
              <option value="16">&nbsp;&nbsp;&nbsp;&nbsp;FL - Fakulteta za logistiko</option>
              <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;FNM - Fakulteta za naravoslovje in matematiko</option>
              <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;FOV - Fakulteta za organizacijske vede</option>
              <option value="7">&nbsp;&nbsp;&nbsp;&nbsp;FS - Fakulteta za strojništvo</option>
              <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;FT - Fakulteta za turizem</option>
              <option value="12">&nbsp;&nbsp;&nbsp;&nbsp;FVV - Fakulteta za varnostne vede</option>
              <option value="14">&nbsp;&nbsp;&nbsp;&nbsp;FZV - Fakulteta za zdravstvene vede</option>
              <option value="17">&nbsp;&nbsp;&nbsp;&nbsp;MF - Medicinska fakulteta</option>
              <option value="10">&nbsp;&nbsp;&nbsp;&nbsp;PEF - Pedagoška fakulteta</option>
              <option value="18">&nbsp;&nbsp;&nbsp;&nbsp;PF - Pravna fakulteta</option>
              <option value="15">&nbsp;&nbsp;&nbsp;&nbsp;UKM - Univerzitetna knjižnica Maribor</option>
              <option value="21">&nbsp;&nbsp;&nbsp;&nbsp;UM - Univerza v Mariboru</option>
              <option class="NeIzbirna" value="cobiss">COBISS</option>
              <option value="c50311">&nbsp;&nbsp;&nbsp;&nbsp;Ekonomsko poslovna fakulteta</option>
              <option value="c50314">&nbsp;&nbsp;&nbsp;&nbsp;Fakulteta za kmetijstvo</option>
              <option value="c55823">&nbsp;&nbsp;&nbsp;&nbsp;Fakulteta za logistiko</option>
              <option value="c50263">&nbsp;&nbsp;&nbsp;&nbsp;Fakulteta za organizacijske vede</option>
              <option value="c50061">&nbsp;&nbsp;&nbsp;&nbsp;Fakulteta za varnostne vede</option>
              <option value="c50322">&nbsp;&nbsp;&nbsp;&nbsp;Fakulteta za zdravstvene vede</option>
              <option value="c50312">&nbsp;&nbsp;&nbsp;&nbsp;Knjižnica tehniških fakultet</option>
              <option value="c55822">&nbsp;&nbsp;&nbsp;&nbsp;Medicinska fakulteta</option>
              <option value="c50317">&nbsp;&nbsp;&nbsp;&nbsp;Miklošičeva knjižnica - FPNM</option>
              <option value="c50326">&nbsp;&nbsp;&nbsp;&nbsp;Pravna fakulteta</option>
              <option value="c50300">&nbsp;&nbsp;&nbsp;&nbsp;Univerzitetna knjižnica Maribor</option>
            </select>


            <div><a href="javascript:ts('Vsebina',1)" title="Povečaj velikost besedila">Večja pisava</a> | <a
                href="javascript:ts('Vsebina',-1)" title="Zmanjšaj velikost besedila">Manjša pisava</a>
            </div>
          </div>

        </div>

      </div>
      <nav>
      <Link to='/slo/uvodnik'>
        Uvodnik
      </Link>
      <a href='https://dk.um.si/Iskanje.php?lang=slv'>
        Iskanje
      </a>
      <a href='https://dk.um.si/Brskanje.php?lang=slv'>
        Brskanje
      </a>
      <Link className="idOddajaDela" to='/slo/uvodnik'>
        <div className="nav-submenu">
          <a href="https://dk.um.si/info/index.php/slo/oddaja-dela">Za študente</a>
          <a href="https://dk.um.si/info/index.php/slo/oddaja-dela-za-zaposlene">Za zaposlene</a>
        </div>
      </Link>
        <a href="https://dk.um.si/Statistika.php?lang=slv">Statistika</a>
        <a className="prijavaNi" href="https://dk.um.si/Prijava.php?lang=slv">Prijava</a>
      </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
