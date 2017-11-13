import styled, { css } from 'styled-components'

export const ContactStyles = styled.section`
  background-color: #bbbbbb;
  display: flex;
  flex-direction: column;
  color: #333;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: 48em) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;

    .contact__form,
    .contact__card--address,
    .contact__card--numbers,
    .contact__card--hours,
    .contact__card--location {
      flex-grow: 1;
      flex-basis: calc(50%);
    }
  }
  .contact__form {
    flex-grow: 0;
    order: 1;
  }
  /* .contact__card--address {
    }
    .contact__card--numbers {
    } */
  .contact__card--hours {
    order: 1;
  }
  /* .contact__card--location {
    } */

  @media (min-width: 250em) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;

    .contact__form,
    .contact__card--address,
    .contact__card--numbers,
    .contact__card--hours,
    .contact__card--location {
      flex-grow: 1;
      flex-basis: calc(50% - 130px);
      margin-left: 130px;
    }
  }

  .contact__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    position: relative;
  }

  .card__header {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 900;
    &::after {
      content: '';
      display: block;
      width: 200px;
      border-bottom: 4px solid #333;
    }
  }

  .card__address {
    padding: 0;
    font-size: 1.7rem;
  }

  .card__address-line {
    margin: 0;
    padding-top: 2px;
  }

  .card__image-container {
    margin: 0;
  }

  .card__image {
    max-width: 100%;
    height: auto;
  }

  .contact__form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    /* align-items: center; */
  }

  .form__input-container {
    padding-right: 8px;
    position: relative;
    display: flex;
    margin-bottom: 1.5rem;
    /* justify-content: space-between; */
    width: 100%;

    &--more-bot {
      margin-bottom: 3rem;
    }
  }

  .form__label {
    position: absolute;
    font-size: 1.5rem;
    bottom: 4px;
    transition: top 0.4s;
    top: initial;

    ${props =>
      props.full &&
      css`
        top: 0;
        left: 0;
        font-size: 1rem;
      `};
  }

  .form__input {
    outline: none;
    width: 100%;
    padding: 0.8rem;
    border: 0;
    border-bottom: 1px solid black;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    border-radius: 0;

    &:focus ~ label {
      transform: translateY(0);
      font-size: 1rem;
    }
  }

  .form__submit {
    align-self: flex-start;
    padding: 8px;
    font-size: 1.5rem;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: #072d73;
    color: #fff;
    border-radius: 2px;
    transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    &:hover,
    &:active {
      transform: translateY(-1px);
      background-color: #062763;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.18);
    }
  }

  .form__header {
    margin: 0;
    margin-bottom: 1rem;
  }

  .form__textarea {
    resize: none;
    margin-bottom: 2rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
  }
`

export const Label = styled.label`
  position: absolute;
  font-size: 1.5rem;
  transition: transform 0.2s;
  transform: translateY(10px);

  ${props =>
    props.full &&
    css`
      transform: translateY(0);
      font-size: 1rem;
    `};
`

export const DateStyles = styled.div`
  display: flex;
  flex-direction: column;
  .card__hour {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  .hour__header {
    margin: 0;
    font-size: 2rem;
  }
  .time__one,
  .time__two {
    font-size: 1.5rem;
  }
`

export const ContactNumberStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  .contact__info-line {
    text-decoration: none;
    color: #333;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`
