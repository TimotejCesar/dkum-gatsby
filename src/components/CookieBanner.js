import React from "react";

const cookieName = "GDPR"; // Name of our cookie

class CookieBanner extends React.Component {
  constructor() {
    super();
    this.state = {
      cookieSet: false
    };
  }

  checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return c.substring(nameEQ.length, c.length).toLowerCase();
    }
    return null;
  }

  componentDidMount() {
    var cVal = this.checkCookie(cookieName);
    cVal = cVal === null ? "" : cVal.toLowerCase();
    if (cVal.indexOf("gdpr") !== 0) this.setState({ cookieSet: true });
  }

  render() {
    if (this.state.cookieSet) {
      return (
        <div id="eucookielaw">
          Naša spletna stran uporablja piškotke, za nekatere potrebujemo vašo
          privolitev.
          <a
            className="eucookielaw-accept"
            href="https://dk.um.si/cookies.php?lang=slv"
          >
            Uredi privolitev...
          </a>
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default CookieBanner;
