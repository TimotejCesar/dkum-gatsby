import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div>
					Digitalna knjižnica Univerze v Mariboru |
			    <a href="mailto:dkum@um.si">dkum@um.si</a>
          <a class="prijava" href="https://dk.um.si/prijava.php?mode=">Prijava za skrbnike</a>
        </div>
      </footer>
    )
  }
}

export default Footer
