import styled from 'styled-components'

export const FooterStyles = styled.footer`
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  padding: 8px 56px 8px;
  font-size: 1.7rem;
  color: #333;
  justify-content: space-between;

  @media (max-width: 50em) {
    padding: 4px 40px 4px;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 1.5rem;
  }
  @media (max-width: 50em) {
    .footer__left,
    .footer__right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .footer__element {
      margin-bottom: 8px;
    }

    .footer__break {
      display: none;
    }
  }
  .footer__break {
    padding: 0 4.5px;
  }
  .footer__link {
    text-decoration: none;
    color: #333;
  }
`
