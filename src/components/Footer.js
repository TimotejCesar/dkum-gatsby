import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div>
					Digitalna knjižnica Univerze v Mariboru | 
			    <a href="mailto:dkum@um.si"> dkum@um.si</a>
          <a className="prijava" href="https://dk.um.si/prijava.php?mode=">Prijava za skrbnike</a>
        </div>
      </footer>
    )
  }
}

export default Footer
