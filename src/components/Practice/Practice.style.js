import styled from 'styled-components'

export const PracticeStyles = styled.section`
  display: flex;
  flex-direction: column;
  /* padding: 50px 50px; */
  padding: 50px 60px;
  background-color: #bbbbbb;

  @media (max-width: 50em) {
    padding-left: 2rem;
    padding-bottom: 6rem;
  }
  .practice__heading {
    font-weight: 400;
    margin: 0;
    font-size: 4rem;
    font-weight: 900;
  }
  .practice__description {
    font-size: 2rem;
    max-width: 57%;
    line-height: 1.8;
  }
  @media (max-width: 50em) {
    .practice__description {
      max-width: 100%;
      font-size: 1.7rem;
    }
  }
`
