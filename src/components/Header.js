import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import um_logo from "../img/logotip_um2.png"
import looking_glass from "../img/gosearch15.png"

const Header = ({ siteTitle }) => {
  /**
* Sproži hitro iskanje preko pritiska enter v iskalnem polju.
* @param object e   Event ali null. Če, null, potem kar sproži iskanje, sicer
*                   pa preveri, če je bila pritisnjena tipka enter.
* @param string langCode 
*                   Možnosti "slv" ali "eng".  
*/
  function HitroIskanje_onKeyDown(e, langCode) {
    console.log(e, langCode);
    // code = 0;
    // if(e != null) {
    // 	if(window.event) {
    //     //IE
    // 		code = e.keyCode;
    // 		if(code == 13) e.keyCode = 0;
    // 	}
    // 	else if(e.which) {
    //     //Firefox
    // 		code = e.which;
    // 	}
    // }
    // else
    //   code = 13;

    // if(code == 13) {
    // 	if(e != null && e.preventDefault) e.preventDefault();
    //   var niz = e.target.value;
    //   var vir=$("#iskaniVir").find(":selected").val();

    //   HitroIskanje_Sprozi(niz, vir, langCode);
    // }

  }

  /**
  * Sproži hitro iskanje preko klika na lupo
  * @param object e   Event.
  * @param string langCode 
  *                   Možnosti "slv" ali "eng".  
  */
  function HitroIskanje_OnLupaClick(e, langCode) {
    // var niz = $("input#hitriIskalnik").val();
    // var vir=$("#iskaniVir").find(":selected").val();

    // if(niz===prevedi('hitroIskanje')){
    //   niz="";
    //   $("input#hitriIskalnik").val(niz);
    // }

    // HitroIskanje_Sprozi(niz, vir, langCode);
  }

  /**
  * Sproži hitro iskanje.
  * @param string niz Niz iskanja.
  * @param string niz Vir iskanja.
  * @param string langCode Jezik. Možnosti "slv" ali "eng".  
  */
  //function HitroIskanje_Sprozi(niz, vir, langCode) {
    // if(vir == 'cobiss') {
    //     alert(prevedi('izberiteCobissVir'));
    //     return;
    //   }
    //   else if(vir.charAt(0) == 'c') {
    //     vir = vir.substr(1);

    //     if(niz.length > 0){
    //       window.open('http://www.cobiss.si/scripts/cobiss?command=SEARCH&base='
    //             + vir + '&dep=00&select=' + niz);
    //     }
    //     else {
    //       alert(prevedi('vpisiteIskalniNiz'));
    //     }

    //   }
    //   else {
    //     location.href = (
    //       "../../../Iskanje.php?type=enostavno&niz=" + niz + "&vir="+ vir + "&lang=" + langCode
    //     );
    //   }
  //}

  function HitroIskanje_onFocus(e) {
    // if(e.target.value == prevedi('hitroIskanje')) {
    //   e.target.value = '';
    // }
  }


  function HitroIskanje_onBlur(e) {
    // if(e.target.value == '') {
    //   e.target.value = prevedi('hitroIskanje');
    // }
  }

  function ts(type, num) {

  }

  const dropdownOptions = [
    { value:"dk", selected: true, label: "DKUM"},
    { value:"2", label: "EPF - Ekonomsko-poslovna fakulteta"},
    { value:"19", label: "FE - Fakulteta za energetiko"},
    { value:"3", label: "FERI - Fakulteta za elektrotehniko, računalništvo in informatiko"},
    { value:"9", label: "FF - Filozofska fakulteta"},
    { value:"5", label: "FGPA - Fakulteta za gradbeništvo, prometno inženirstvo in arhitekturo"},
    { value:"13", label: "FKBV - Fakulteta za kmetijstvo in biosistemske vede"},
    { value:"6", label: "FKKT - Fakulteta za kemijo in kemijsko tehnologijo"},
    { value:"16", label: "FL - Fakulteta za logistiko"},
    { value:"11", label: "FNM - Fakulteta za naravoslovje in matematiko"},
    { value:"8", label: "FOV - Fakulteta za organizacijske vede"},
    { value:"7", label: "FS - Fakulteta za strojništvo"},
    { value:"22", label: "FT - Fakulteta za turizem"},
    { value:"12", label: "FVV - Fakulteta za varnostne vede"},
    { value:"14", label: "FZV - Fakulteta za zdravstvene vede"},
    { value:"17", label: "MF - Medicinska fakulteta"},
    { value:"10", label: "PEF - Pedagoška fakulteta"},
    { value:"18", label: "PF - Pravna fakulteta"},
    { value:"15", label: "UKM - Univerzitetna knjižnica Maribor"},
    { value:"21", label: "UM - Univerza v Mariboru"},
    { className:"NeIzbirna", value: "cobiss", label: "COBISS"},
    { value:"c50311", label: "Ekonomsko poslovna fakulteta"},
    { value:"c50314", label: "Fakulteta za kmetijstvo"},
    { value:"c55823", label: "Fakulteta za logistiko"},
    { value:"c50263", label: "Fakulteta za organizacijske vede"},
    { value:"c50061", label: "Fakulteta za varnostne vede"},
    { value:"c50322", label: "Fakulteta za zdravstvene vede"},
    { value:"c50312", label: "Knjižnica tehniških fakultet"},
    { value:"c55822", label: "Medicinska fakulteta"},
    { value:"c50317", label: "Miklošičeva knjižnica - FPNM"},
    { value:"c50326", label: "Pravna fakulteta"},
    { value:"c50300", label: "Univerzitetna knjižnica Maribor"}
  ]

  return (
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
                <input id="hitriIskalnik" onKeyDown={(event) => HitroIskanje_onKeyDown(event, 'slv')}
                      onFocus={(event) => HitroIskanje_onFocus(event)} onBlur={(event) => HitroIskanje_onBlur(event)} type="text"
                      value="ISKANJE PO KATALOGU" title="Iskanje po katalogu"/>
                <img src={looking_glass} id="hitroIskanjeLupa"
                    onclick={(event) => HitroIskanje_OnLupaClick(event, 'slv')} alt="Lupa" title="Išči"/>
              </div>

              <select id="iskaniVir" title="Vir iskanja">
                {
                  dropdownOptions.map(option => (
                    <option className={option.className} value={option.value} selected={option.selected}>&nbsp;&nbsp;&nbsp;&nbsp;{option.label}</option>
                  ))
                }
              </select>

            {/* TO DO: IMPLEMENT TEXT SIZER */}
            <div>
              <a onClick={ts('Vsebina', 1)} href="#" title="Povečaj velikost besedila">Večja pisava</a> | 
              <a onClick={ts('Vsebina', -1)} href="#" title="Zmanjšaj velikost besedila">Manjša pisava</a>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
