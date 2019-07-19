import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import um_logo_sl from "../img/logotip_um2.png";
import um_logo_en from "../img/logotip_um2_eng.png";
import looking_glass from "../img/gosearch15.png";
import { FormattedMessage, intlShape, injectIntl } from "react-intl";
import TextSizer from "../components/TextSizer";

class Header extends React.Component {
  constructor({ intl }) {
    super({ intl });
    this.state = {
      selectedSearchSource: "dk",
      showSubmenu: false,
      searchTerm: null,
      langCode: this.props.intl.locale === "sl" ? "slv" : "eng",
      dropdownOptions: [
        { value: "dk", label: "DKUM" },
        { value: "2", label: "    EPF - Ekonomsko-poslovna fakulteta" },
        { value: "19", label: "    FE - Fakulteta za energetiko" },
        {
          value: "3",
          label:
            "    FERI - Fakulteta za elektrotehniko, računalništvo in informatiko"
        },
        { value: "9", label: "    FF - Filozofska fakulteta" },
        {
          value: "5",
          label:
            "    FGPA - Fakulteta za gradbeništvo, prometno inženirstvo in arhitekturo"
        },
        {
          value: "13",
          label: "    FKBV - Fakulteta za kmetijstvo in biosistemske vede"
        },
        {
          value: "6",
          label: "    FKKT - Fakulteta za kemijo in kemijsko tehnologijo"
        },
        { value: "16", label: "    FL - Fakulteta za logistiko" },
        {
          value: "11",
          label: "    FNM - Fakulteta za naravoslovje in matematiko"
        },
        { value: "8", label: "    FOV - Fakulteta za organizacijske vede" },
        { value: "7", label: "    FS - Fakulteta za strojništvo" },
        { value: "22", label: "    FT - Fakulteta za turizem" },
        { value: "12", label: "    FVV - Fakulteta za varnostne vede" },
        { value: "14", label: "    FZV - Fakulteta za zdravstvene vede" },
        { value: "17", label: "    MF - Medicinska fakulteta" },
        { value: "10", label: "    PEF - Pedagoška fakulteta" },
        { value: "18", label: "    PF - Pravna fakulteta" },
        { value: "15", label: "    UKM - Univerzitetna knjižnica Maribor" },
        { value: "21", label: "    UM - Univerza v Mariboru" },
        { className: "NeIzbirna", value: "cobiss", label: "    COBISS" },
        { value: "c50311", label: "    Ekonomsko poslovna fakulteta" },
        { value: "c50314", label: "    Fakulteta za kmetijstvo" },
        { value: "c55823", label: "    Fakulteta za logistiko" },
        { value: "c50263", label: "    Fakulteta za organizacijske vede" },
        { value: "c50061", label: "    Fakulteta za varnostne vede" },
        { value: "c50322", label: "    Fakulteta za zdravstvene vede" },
        { value: "c50312", label: "    Knjižnica tehniških fakultet" },
        { value: "c55822", label: "    Medicinska fakulteta" },
        { value: "c50317", label: "    Miklošičeva knjižnica - FPNM" },
        { value: "c50326", label: "    Pravna fakulteta" },
        { value: "c50300", label: "    Univerzitetna knjižnica Maribor" }
      ]
    };
  }

  /**
   * Sproži hitro iskanje preko pritiska enter v iskalnem polju.
   * @param object e   Event ali null. Če, null, potem kar sproži iskanje, sicer
   *                   pa preveri, če je bila pritisnjena tipka enter.
   * @param string langCode
   *                   Možnosti "slv" ali "eng".
   */
  HitroIskanje_onKeyDown = function(e, langCode) {
    var code = 0;
    if (e !== null) {
      if (window.event) {
        //IE
        code = e.keyCode;
        if (code === 13) e.keyCode = 0;
      } else if (e.which) {
        //Firefox
        code = e.which;
      }
    } else code = 13;

    if (code === 13) {
      if (e !== null && e.preventDefault) e.preventDefault();
      var niz = e.target.value;
      var vir = this.state.selectedSearchSource;

      this.HitroIskanje_Sprozi(niz, vir, langCode);
    }
  };

  /**
   * Sproži hitro iskanje preko klika na lupo
   * @param object e   Event.
   * @param string langCode
   *                   Možnosti "slv" ali "eng".
   */
  HitroIskanje_OnLupaClick = function(e, langCode) {
    var niz = this.state.searchTerm;
    var vir= this.state.selectedSearchSource;
    if(niz === this.props.intl.formatMessage({id: 'hitroIskanje'})){
      niz="";
      this.setState({searchTerm : niz});
    }
    this.HitroIskanje_Sprozi(niz, vir, langCode);
  };

  /**
   * Sproži hitro iskanje.
   * @param string niz Niz iskanja.
   * @param string niz Vir iskanja.
   * @param string langCode Jezik. Možnosti "slv" ali "eng".
   */
  HitroIskanje_Sprozi = function(niz, vir, langCode) {
    if (vir === "cobiss") {
      //prevedi
      this.props.intl.formatMessage({ id: "izberiteCobissVir" });
      return;
    } else if (vir.charAt(0) === "c") {
      vir = vir.substr(1);

      if (niz.length > 0) {
        window.open(
          "http://www.cobiss.si/scripts/cobiss?command=SEARCH&base=" +
            vir +
            "&dep=00&select=" +
            niz
        );
      } else {
        //prevedi
        alert(this.props.intl.formatMessage({ id: "vpisiteIskalniNiz" }));
      }
    } else {
      window.location.href =
        "https://dk.um.si/Iskanje.php?type=enostavno&niz=" +
        niz +
        "&vir=" +
        vir +
        "&lang=" +
        langCode;
    }
  };

  HitroIskanje_onFocus = function(e) {
    if (
      e.target.value === this.props.intl.formatMessage({ id: "hitroIskanje" })
    ) {
      e.target.value = "";
    }
  };

  HitroIskanje_onBlur = function(e) {
    if (e.target.value === "") {
      e.target.value = this.props.intl.formatMessage({ id: "hitroIskanje" });
    }
  };

  DropdownChange(e) {
    this.setState({
      selectedSearchSource: e.target.value
    });
  }

  SearchInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  DropdownMouseEnter() {
    this.setState({ showSubmenu: true });
  }
  DropdownMouseLeave() {
    this.setState({ showSubmenu: false });
  }

  render() {
    return (
      <header>
        <div id="zgornjiDelGlave">
          <div id="logo">
          { this.props.intl.locale === "sl" ? (
            <Link to="/slo/" title="Pojdi na prvo stran DKUM">
              <img
                src={um_logo_sl}
                alt="Logotip UM"
              />
            </Link>) : (
              <Link to="/eng/" title="Pojdi na prvo stran DKUM">
              <img
                src={um_logo_en}
                alt="Logotip UM"
              />
            </Link>)
          }

          </div>

          <div id="topMenu">
            <div className="custom">
              <div>
                <Link to="/slo/">SLO</Link> |<Link to="/eng/"> ENG</Link> |
                <a href="https://dk.um.si/cookies.php" className="as-link">
                  {" "}
                  <FormattedMessage id="cookies_and_privacy" />
                </a>
              </div>
              <div className="iskalnoPolje">
                <input
                  id="hitriIskalnik"
                  onKeyDown={event =>
                    this.HitroIskanje_onKeyDown(event, this.state.langCode)
                  }
                  onFocus={event => this.HitroIskanje_onFocus(event)}
                  onBlur={event => this.HitroIskanje_onBlur(event)}
                  onChange={event => this.SearchInputChange(event)}
                  type="text"
                  defaultValue={this.props.intl.formatMessage({
                    id: "hitroIskanje"
                  })}
                  title="Iskanje po katalogu"
                />
                <img
                  src={looking_glass}
                  id="hitroIskanjeLupa"
                  onClick={event =>
                    this.HitroIskanje_OnLupaClick(event, this.state.langCode)
                  }
                  alt="Lupa"
                  title="Išči"
                />
              </div>

              <select
                id="iskaniVir"
                onChange={event => this.DropdownChange(event)}
                title="Vir iskanja"
                value={this.state.dropdownOptions[0].value}
              >
                {this.state.dropdownOptions.map(option => (
                  <option
                    className={option.className}
                    value={option.value}
                    key={option.value}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;{option.label}
                  </option>
                ))}
              </select>

              <TextSizer />
            </div>
          </div>
        </div>
        <nav>
          {this.props.intl.locale === "sl" ? (
            <Link to="/slo/uvodnik">Uvodnik</Link>
          ) : (
            <Link to="/eng/introduction">Introduction</Link>
          )}
          <a href={"https://dk.um.si/Iskanje.php?lang=" + this.state.langCode}>
            <FormattedMessage id="nav_search" />
          </a>
          <a href={"https://dk.um.si/Brskanje.php?lang=" + this.state.langCode}>
            <FormattedMessage id="nav_browsing" />
          </a>
          <span
            className="idOddajaDela"
            onMouseEnter={this.DropdownMouseEnter.bind(this)}
            onMouseLeave={this.DropdownMouseLeave.bind(this)}
          >
            <FormattedMessage id="nav_upload_document" />
            <div
              className={
                "nav-submenu " + (this.state.showSubmenu ? "show" : "")
              }
            >
              {this.props.intl.locale === "sl" ? (
                <Link to="/slo/oddaja-dela">Za študente</Link>
              ) : (
                <Link to="/eng/upload-document">Upload document</Link>
              )}
              {this.props.intl.locale === "sl" ? (
                <Link to="/slo/oddaja-dela-za-zaposlene">Za zaposlene</Link>
              ) : (
                <Link to="/eng/document-upload-for-employees">
                  Document upload for employees
                </Link>
              )}
            </div>
          </span>
          <a
            href={"https://dk.um.si/Statistika.php?lang=" + this.state.langCode}
          >
            <FormattedMessage id="nav_statistics" />
          </a>
          <a
            className="prijavaNi"
            href={"https://dk.um.si/Prijava.php?lang=" + this.state.langCode}
          >
            <FormattedMessage id="nav_login" />
          </a>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  intl: intlShape
};

Header.defaultProps = {
  siteTitle: ``
};

export default injectIntl(Header);
