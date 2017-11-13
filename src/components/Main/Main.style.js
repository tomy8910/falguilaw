import styled from 'styled-components'

export const MainStyles = styled.main`
  background-color: #bbbbbb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 2rem;
  padding-top: 7rem;
  padding-left: 100px; */
  padding: 15px 60px;
  color: #333;
  font-family: 'Cardo', serif;

  @media (max-width: 50em) {
    padding-left: 4rem;
    padding-bottom: 6rem;
    padding-top: 0;
  }

  .main__caption {
    font-size: 4.5rem;
    font-style: italic;
    margin-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }
  @media (max-width: 50em) {
    .main__caption {
      font-size: 2.5rem;
    }
  }
  .main__content {
    font-family: 'Montserrat', serif;
    font-size: 2rem;
    max-width: 65%;
    line-height: 1.7;
    margin-bottom: 3rem;
  }
  @media (max-width: 50em) {
    .main__content {
      max-width: 100%;
      font-size: 1.7rem;
    }
  }
  .main__button {
    width: 150px;
    padding: 1.7rem;
    font-size: 2rem;
    letter-spacing: 0.4px;
    border: 0;
    box-shadow: 0;
    background-color: #cccccc;
    border-radius: 1px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;

    @media (max-width: 50em) {
      width: 100px;
      font-size: 1.5rem;
    }
  }
  .main__button-link {
    text-decoration: none;
    color: #333;
  }
`
