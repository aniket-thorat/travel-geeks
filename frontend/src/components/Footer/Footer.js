import React from 'react'
import { Row } from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <Row className='row'>
          <p>We help the users across the globe to share there travelling experience and help other users to choose theier next travelling destination</p>

          <div className='social'>
            <a href="https://www.youtube.com/channel/UCGQYpPoA5qYO15r0GWYD1Gw"
              className="youtube social" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/aniket.thorat.737448"
              className="facebook social" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/anikett_18" className="twitter social" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/_aniket_t_18/"
              className="instagram social" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <p className='mt-3'>@Copyright - {Date().substring(10, 15)}</p>
        </Row>

      </footer>
    </>
  )
}

export default Footer