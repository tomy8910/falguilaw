import React, { Component } from 'react'
import { ContactStyles, Label } from './Contact.style'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export default class Contact extends Component {
  state = {
    input1: '',
    input2: '',
    input3: ''
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { input1, input2, input3 } = this.state
    return (
      <ContactStyles>
        <div className="contact__card">
          <h1 className="card__header">Our Address</h1>
          <address className="card__address">
            <p className="card__address-line">Falgui Law Offices</p>
            <p className="card__address-line">2nd Floor, Falgui Building</p>
            <p className="card__address-line">National Highway</p>
            <p className="card__address-line">General Santos City</p>
            <p className="card__address-line">9500 South Cotabato</p>
            <p className="card__address-line">Philippines</p>
          </address>
        </div>
        <div className="contact__card">
          <h1 className="card__header">Our Location</h1>
          <figure className="card__image-container">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=400x315&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visiblity:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=PH&markers=color:0xd07ea7|6.1189987,125.1694236&zoom=16&key=AIzaSyACQwIq0LlyEVs1Zl1EIA9OCyKopoYIx-E"
              alt=""
              className="card__image"
            />
          </figure>
        </div>
        <form
          className="contact__form"
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <h1 className="form__header">Contact Us</h1>
          <div className="form__input-container form__name">
            <input
              type="text"
              id="name"
              className="form__input"
              value={input1}
              name="input1"
              onChange={this.onChange}
            />
            <Label htmlFor="name" full={input1 !== ''}>
              Name
            </Label>
          </div>
          <div className="form__input-container form__email">
            <input
              type="email"
              id="email"
              className="form__input"
              value={input2}
              name="input2"
              onChange={this.onChange}
            />
            <Label htmlFor="email" full={input2 !== ''}>
              Email
            </Label>
          </div>
          <div className="form__input-container form__number form__input-container--more-bot">
            <input
              type="text"
              id="number"
              className="form__input"
              name="input3"
              value={input3}
              onChange={this.onChange}
            />
            <Label htmlFor="number" full={input3 !== ''}>
              Contact
            </Label>
          </div>
          <button type="submit" className="form__submit">
            Send Message
          </button>
        </form>
      </ContactStyles>
    )
  }
}
