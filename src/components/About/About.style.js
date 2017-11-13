import styled from 'styled-components'

export const AboutStyles = styled.main`
  background-color: #bbbbbb;
  display: flex;
  justify-content: center;
  overflow: scroll;
  padding: 15px 60px;
  flex-direction: column;
  /* /align-items: center; */
  font-size: 2rem;
  @media (max-width: 50em) {
    padding: 15px 20px;
  }

  .about__content {
    max-width: 55%;
    line-height: 1.8;
    opacity: 1;
    display: block;
    margin-top: 0;
  }
  @media (max-width: 64em) {
    .about__content {
      max-width: 72%;
      line-height: 1.8;
    }
  }
  @media (max-width: 50em) {
    .about__content {
      max-width: 90%;
    }
  }
  @media (max-width: 37.5em) {
    .about__content {
      max-width: 100%;
      font-size: 1.7rem;
      line-height: 1.8;
    }
  }
  .about__content-header {
    font-family: 'Montserrat';
    font-weight: 400;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  .about__p {
    margin-top: 0;
  }

  .about__p--bot-m {
    margin-bottom: 3rem;
  }

  .about__content--hide {
    opacity: 0;
    display: none;
  }
  .about__nav {
    list-style: none;
    padding: 0;
    display: flex;
    /* align-self: center; */
    font-size: 1.8rem;
  }
  @media (max-width: 37.5em) {
    .about__nav {
      max-width: 100%;
      font-size: 1.7rem;
    }
  }
  .about__nav-item {
    color: #555;
    cursor: pointer;
  }
  .about__nav-item--active {
    color: #333;
  }
  .about__nav-item--margin-right {
    margin-right: 3rem;
  }
`
