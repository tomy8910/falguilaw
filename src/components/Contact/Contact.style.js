import styled from 'styled-components'

export const ContactStyles = styled.section`
  background-color: #bbbbbb;
  display: flex;
  flex-direction: column;
  color: #333;

  .contact__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .card__header {
    margin: 0;
    margin-bottom: 1rem;
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
    align-items: center;
  }

  .form__input-container {
    display: flex;
    justify-content: space-between;
  }

  .form__label {
    font-size: 1.5rem;
  }

  .form__input {
  }

  .form__submit {
    color: #333;
  }
`
