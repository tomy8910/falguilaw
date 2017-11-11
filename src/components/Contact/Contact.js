import React, { Component } from 'react'
import { ContactStyles } from './Contact.style'

export default class Contact extends Component {
  render() {
    return (
      <ContactStyles>
        <div className="contact__card">
          <h1 className="card__header">Our Location</h1>
          <figure className="card__image-container">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=400x315&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visiblity:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=PH&markers=color:0xd07ea7|6.1189987,125.1694236&zoom=16&key=AIzaSyACQwIq0LlyEVs1Zl1EIA9OCyKopoYIx-E"
              alt=""
              className="card__image"
            />
          </figure>
          <address className="card__address">Address Here</address>
        </div>
        <form className="contact__form">
          <h1 className="form__header">How may we help you?</h1>
          <div className="form__input-container form__name">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input type="text" id="name" className="form__input" />
          </div>
          <div className="form__input-container form__email">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input type="email" id="email" className="form__input" />
          </div>
          <div className="form__input-container form__number">
            <label htmlFor="" htmlFor="number" className="form__label">
              Contact #
            </label>
            <input type="text" id="number" className="form__input" />
          </div>
          <button type="submit" className="form__submit">
            Send Message
          </button>
        </form>
      </ContactStyles>
    )
  }
}
