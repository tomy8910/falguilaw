import styled from 'styled-components'
;('C28500')
export const HeaderStyle = styled.header`
  /* background-color: #d9d9d9; */
  border-top: 6px solid #072d73;
  background-color: #f7f7f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  .header__special {
    display: none;
  }
  @media (max-width: 50.75em) {
    .header__special {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 15px;
    }
    .header__special-hide {
      border-top: 6px solid #072d73;
      position: absolute;
      z-index: 99999;
      transform: translateX(-500%);
      transition: transform 0.9s ease-in-out;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 2px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #f7f7f8;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      font-size: 2.5rem;
    }
    .header__special-link {
      color: #333;
      text-decoration: none;
    }
    .header__special-hide-hide--revealoo {
      transform: translateX(0);
    }
    .header__special-item {
      padding: 10px;
      margin: 10px;
    }

    .header__special-svg {
      width: 20px;
    }
    .header__special-close-svg {
      width: 8%;
    }
    .header__special-item--close {
      padding: 40px;
      text-align: center;
    }
    .header__special-main {
      text-align: right;
      cursor: pointer;
      width: 100%;
      font-size: 3rem;
      padding: 10px;

      @media (max-width: 30em) {
        /* font-size: 2.3rem; */
      }
    }
  }
  .header__nav {
    padding: 0 8rem;
  }
  @media (max-width: 50.75em) {
    .header__nav {
      padding: 0 4rem;
    }
  }
  .header__nav-list {
    display: flex;

    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    justify-content: center;
  }
  @media (max-width: 50.75em) {
    .header__nav-list {
      justify-content: space-between;
    }
  }
  .header__nav-item {
    margin-right: 3rem;
  }
  /* .header__nav-item--bottom {
    &::after {
      content: '';
      display: block;
      border-bottom: 1px solid #072d73;
    }
  } */
  .header__nav-item--logo {
    margin-right: auto;
  }

  @media (max-width: 50.75em) {
    .header__nav-item--disappear {
      display: none;
    }
    .header__nav-item--logo {
      margin-right: 0;
      -ms-flex-item-align: center;
      align-self: center;
    }
  }
  .header__nav-link {
    text-decoration: none;
    font-size: 1.7rem;
    width: 100%;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    color: #333;
    display: block;
    transition: color 0.2s;
    &:hover {
      color: #111;
    }

    @media (min-width: 55.625em) {
      padding: 8px;
    }
  }
  .header__nav-link--logo {
    font-size: 5rem;
    max-width: 70%;
    height: auto;
  }
  @media (max-width: 50.75em) {
    .header__nav-link--logo {
      max-width: 100%;
    }
  }
  .header__nav-link--strong {
    text-transform: uppercase;
    letter-spacing: 4px;
  }
`
