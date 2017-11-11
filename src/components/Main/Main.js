import React, { Component } from 'react'
import { MainStyles } from './Main.style'
import Link from 'gatsby-link'

export default class Main extends Component {
  render() {
    return (
      <MainStyles>
        <p className="main__caption">
          Achieving excellence in pursuit of justice.
        </p>
        <p className="main__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vestibulum sapien a nisl imperdiet eleifend. Nam odio velit, aliquet
          sit amet consequat nec, lacinia a tortor. Vivamus tellus purus,
          rhoncus ut nisl vel, blandit mattis felis. Nam faucibus, purus et
          pulvinar venenatis, ligula arcu porta quam, quis ornare nunc nulla
          eget nisl. Donec blandit massa at eros semper sodales. Mauris ac quam
          sit amet justo vestibulum viverra. Ut ut purus diam. Aliquam mauris
          lectus, venenatis id turpis a, tempus tempor augue. Suspendisse
          mollis, sapien non congue tincidunt, sem augue porttitor urna, et
          elementum sapien diam ut orci. Vivamus rutrum, lectus vitae hendrerit
          accumsan, ex sapien congue nisl, sed consequat arcu neque ut ex.
          Nullam malesuada auctor elit, ac placerat massa scelerisque non.
        </p>
        <Link className="main__button-link" to="/contact/">
          <button className="main__button">Contact Us</button>
        </Link>
      </MainStyles>
    )
  }
}
