import styled, { css } from 'styled-components'

export const ContactStyles = styled.section`
  background-color: #bbbbbb;
  display: flex;
  flex-direction: column;
  color: #333;

  .contact__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    position: relative;

    /* &::after {
      content: '';
      display: block;
      align-self: center;
      border-bottom: 1px solid black;
      width: 20%;
      position: absolute;
      bottom: 8px;
    } */
  }

  .card__header {
    margin: 0;
    margin-bottom: 1rem;
  }

  .card__address {
    padding: 0;
    font-size: 1.5rem;
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
    margin-bottom: 1rem;
    /* justify-content: space-between; */
    width: 100%;

    &--more-bot {
      margin-bottom: 2rem;
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
    padding: 1rem;
    border: 0;
    border-bottom: 1px solid black;
    background-color: transparent;
    font-size: 2rem;

    &:focus ~ label {
      top: 0;
      left: 0;
      font-size: 1rem;
    }
  }

  .form__submit {
    color: #333;
    align-self: flex-start;
    padding: 8px;
    background-color: #aaa;
    font-size: 1.2rem;
    border: 0;
  }

  .form__header {
    margin: 0;
    margin-bottom: 1rem;
  }
`

export const Label = styled.label`
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
`
