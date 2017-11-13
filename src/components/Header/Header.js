import React, { Component } from 'react'
import Link from 'gatsby-link'
import { HeaderStyle } from './Header.style'

export default class Header extends Component {
  toggleNavMenu = () => {
    this.reveal.classList.toggle('header__special-hide-hide--revealoo')
  }

  render() {
    return (
      <HeaderStyle>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item--logo">
              <Link className="header__nav-link header__nav-link--logo" to="/">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 178 73"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.414"
                >
                  <g fillRule="nonzero">
                    <g fill="#3c3c3c">
                      <path d="M14.876 18.694h18.108l-.036 4.716H20.564v6.192H31.94v4.752H20.564v9.54h-5.688v-25.2zM57.896 43.894l-1.98-4.896H44.252l-1.98 4.896h-5.868l10.944-25.2h5.868l10.764 25.2h-6.084zm-11.772-9.468h7.956l-3.96-9.792-3.996 9.792zM70.748 18.694h5.688v20.232h10.8v4.968H70.748v-25.2zM111.68 31.186h4.932v9.792c-1.344.984-2.952 1.782-4.824 2.394-1.872.612-3.672.918-5.4.918-2.52 0-4.8-.57-6.84-1.71-2.04-1.14-3.648-2.7-4.824-4.68-1.176-1.98-1.764-4.194-1.764-6.642 0-2.424.6-4.626 1.8-6.606 1.2-1.98 2.85-3.534 4.95-4.662 2.1-1.128 4.434-1.692 7.002-1.692 1.872 0 3.702.336 5.49 1.008 1.788.672 3.33 1.584 4.626 2.736l-3.204 4.068a10.433 10.433 0 0 0-3.24-2.088c-1.224-.504-2.448-.756-3.672-.756-1.464 0-2.802.354-4.014 1.062a7.754 7.754 0 0 0-2.862 2.88c-.696 1.212-1.044 2.562-1.044 4.05s.354 2.85 1.062 4.086a7.81 7.81 0 0 0 2.88 2.916c1.212.708 2.55 1.062 4.014 1.062.744 0 1.548-.126 2.412-.378a13.387 13.387 0 0 0 2.52-1.026v-6.732zM132.506 37.756c1.02 1.044 2.382 1.566 4.086 1.566 1.656 0 2.976-.516 3.96-1.548s1.476-2.46 1.476-4.284V18.694h5.688V33.49c0 2.208-.45 4.122-1.35 5.742-.9 1.62-2.19 2.868-3.87 3.744-1.68.876-3.66 1.314-5.94 1.314-2.28 0-4.272-.438-5.976-1.314-1.704-.876-3.012-2.124-3.924-3.744-.912-1.62-1.368-3.534-1.368-5.742V18.694h5.688V33.49c0 1.8.51 3.222 1.53 4.266zM156.968 18.694h5.688v25.2h-5.688z" />
                    </g>
                    <g fill="#495057">
                      <path d="M63 53h1.128v5.856h2.976v1.008H63V53zM86.072 59.864l-.672-1.572h-3.468l-.672 1.572h-1.176L83.108 53h1.176l3 6.864h-1.212zm-3.744-2.532h2.664L83.66 54.2l-1.332 3.132zM97.856 53h1.212l1.728 5.616L102.5 53h1.116l1.716 5.616L107.036 53h1.164l-2.328 6.864h-1.164l-1.668-5.4-1.704 5.4h-1.164L97.856 53z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <div className="header__special">
              <div
                className="header__special-main js--click"
                ref={item => (this.click = item)}
                onClick={this.toggleNavMenu}
              >
                <svg
                  viewBox="0 0 47 36"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  strokeMiterlimit={1.5}
                  className="header__special-svg"
                >
                  <path d="M3 3h41" fill="none" stroke="#000" strokeWidth={6} />
                  <path
                    d="M3 18h41"
                    fill="none"
                    stroke="#000"
                    strokeWidth={6}
                    strokeLinejoin="miter"
                  />
                  <path
                    d="M3 33h41"
                    fill="none"
                    stroke="#000"
                    strokeWidth={6}
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="header__special-hide js--reveal"
                ref={item => (this.reveal = item)}
                onClick={this.toggleNavMenu}
              >
                <div className="header__special-item header__special-item--close js--hide">
                  <svg
                    viewBox="0 0 25 25"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinecap="round"
                    strokeMiterlimit={1.5}
                    className="header__special-close-svg"
                  >
                    <path
                      d="M3.153 4.332l18.694 17.336m-18.694 0L21.847 4.332"
                      fill="none"
                      stroke="#000"
                      strokeWidth={4}
                    />
                  </svg>
                </div>
                <div className="header__special-item" tabIndex="-1">
                  <Link className="header__special-link" to="/about/">
                    about
                  </Link>
                </div>
                <div className="header__special-item" tabIndex="-1">
                  <Link className="header__special-link" to="/practice/">
                    areas
                  </Link>
                </div>
                <div className="header__special-item" tabIndex="-1">
                  <Link className="header__special-link" to="/contact/">
                    contact
                  </Link>
                </div>
              </div>
            </div>
            <li className="header__nav-item header__nav-item--disappear">
              <Link className="header__nav-link" to="/about/">
                about us
              </Link>
            </li>
            <li className="header__nav-item header__nav-item--disappear">
              <Link className="header__nav-link" to="/practice/">
                practice areas
              </Link>
            </li>
            <li className="header__nav-item header__nav-item--disappear">
              <Link className="header__nav-link" to="/contact/">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderStyle>
    )
  }
}
