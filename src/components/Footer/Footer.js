import React, { Component } from 'react'
import Link from 'gatsby-link'
import { FooterStyles } from './Footer.style'

export default class Footer extends Component {
  render() {
    return (
      <FooterStyles>
        <p className="footer__left">
          <span className="footer__element">&copy; 2017 Falgui. </span>
          <span className="footer__break">| </span>
          <span className="footer__element footer__element--border-bottom">
            All rights reserved.{' '}
          </span>
          <span className="footer__break">| </span>
          <Link className="footer__link footer__element--border-bottom" to="">
            Disclaimer
          </Link>
        </p>
        <p className="footer__right">
          <Link
            className="footer__link footer__element footer__element--border-bottom"
            to="/contact/"
          >
            Contact Us
          </Link>
          <span className="footer__break">| </span>
          <a
            className="footer__link footer__element footer__element--border-bottom"
            href="tel:+63-83-552-4631"
          >
            083 552 4631
          </a>
        </p>
      </FooterStyles>
    )
  }
}
