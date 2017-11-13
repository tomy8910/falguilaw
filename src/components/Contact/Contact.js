import React, { Component } from 'react'
import {
  ContactStyles,
  Label,
  DateStyles,
  ContactNumberStyles
} from './Contact.style'
import ReactModal from 'react-modal'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export default class Contact extends Component {
  state = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    open: false
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => this.setState({ open: true }))
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
        <ReactModal
          isOpen={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
          contentLabel="Succes Modal"
          parentSelector={() => document.body}
          role="dialog"
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)'
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '300px',
              height: '200px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              backgroundColor: '#ccc'
            }
          }}
        >
          <h1
            id="heading"
            style={{ fontSize: '4rem', fontWeight: 700, marginBottom: 0 }}
          >
            Success
          </h1>
          <div id="full_description">
            <p
              style={{
                marginTop: '5px',
                fontSize: '2rem',
                fontWeight: 200,
                fontFamily: '"Montserrat", sans-serif'
              }}
            >
              Your message was sucessfully sent!
            </p>
          </div>
          <button
            onClick={() => this.setState({ open: false })}
            style={{
              color: '#333',
              padding: '8px',
              backgroundColor: '#aaa',
              fontSize: '1.5rem',
              border: 0,
              fontFamily: '"Montserrat", sans-serif'
            }}
          >
            Go Back
          </button>
        </ReactModal>

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
          <h1 className="card__header">Our Contact</h1>
          <ContactNumberStyles>
            <a href="tel:+63-83-552-4631" className="contact__info-line">
              083 552 4631
            </a>
            <a href="tel:+63-83-552-5580" className="contact__info-line">
              083 552 5580
            </a>
            <a href="tel:+63-917-717-7171" className="contact__info-line">
              0917 717 7171
            </a>
          </ContactNumberStyles>
        </div>
        <div className="contact__card">
          <h1 className="card__header">Our Business Hours</h1>
          <DateStyles>
            <div className="card__hour">
              <h2 className="hour__header">Mon</h2>
              <time className="time__one">8:30 AM – 12:00 PM</time>
              <time className="time__two">2:00 – 6:00 PM</time>
            </div>
            <div className="card__hour">
              <h2 className="hour__header">Tue</h2>
              <time className="time__one">8:30 AM – 12:00 PM</time>
              <time className="time__two">2:00 – 6:00 PM</time>
            </div>
            <div className="card__hour">
              <h2 className="hour__header">Wed</h2>
              <time className="time__one">8:30 AM – 12:00 PM</time>
              <time className="time__two">2:00 – 6:00 PM</time>
            </div>
            <div className="card__hour">
              <h2 className="hour__header">Thu</h2>
              <time className="time__one">8:30 AM – 12:00 PM</time>
              <time className="time__two">2:00 – 6:00 PM</time>
            </div>
            <div className="card__hour">
              <h2 className="hour__header">Fri</h2>
              <time className="time__one">8:30 AM – 12:00 PM</time>
              <time className="time__two">2:00 – 6:00 PM</time>
            </div>
            <div className="card__hour">
              <h2 className="hour__header">Sat</h2>
              <time className="time__one">9:00 AM – 12:00 PM</time>
            </div>
            <div className="card__hour">
              <h2 className="hour__header">Sun</h2>
              <time className="time__one">Closed</time>
            </div>
          </DateStyles>
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
          <h1 className="form__header card__header">Contact Us</h1>
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

          <textarea
            name="input4"
            cols="30"
            value={this.state.input4}
            onChange={this.onChange}
            rows="8"
            className="form__textarea"
            placeholder="Message"
          />

          <button type="submit" className="form__submit">
            Send Message
          </button>
        </form>
      </ContactStyles>
    )
  }
}
