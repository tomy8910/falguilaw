import React, { Component } from 'react'
import { AboutStyles } from './About.style'

export default class About extends Component {
  swapNav = name => () => {
    const classList = this[name].classList
    if (classList.contains('about__nav-item--active')) {
      return
    }

    this.firstContent.classList.toggle('about__content--hide')
    this.secondContent.classList.toggle('about__content--hide')
    this.overview.classList.toggle('about__nav-item--active')
    this.history.classList.toggle('about__nav-item--active')
  }
  render() {
    return (
      <AboutStyles>
        <ul className="about__nav">
          <li
            className="about__nav-item about__nav-item--margin-right about__nav-item--active js--overview"
            ref={btn => (this.overview = btn)}
            onClick={this.swapNav('overview')}
          >
            Overview
          </li>
          <li
            className="about__nav-item js--history"
            ref={btn => (this.history = btn)}
            onClick={this.swapNav('history')}
          >
            History
          </li>
        </ul>
        <div
          className="about__content js--first-content"
          ref={content => (this.firstContent = content)}
        >
          <h1 className="about__content-header"> Firm Overview</h1>
          <p className="about__p about__p--bot-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum sapien a nisl imperdiet eleifend. Nam odio velit, aliquet
            sit amet consequat nec, lacinia a overview. Vivamus tellus purus,
            rhoncus ut nisl vel, blandit mattis felis. Nam faucibus, purus et
            pulvinar venenatis, ligula arcu porta quam, quis ornare nunc nulla
            eget nisl. Donec blandit massa at eros semper sodales. Mauris ac
            quam sit amet justo vestibulum viverra. Ut ut purus diam. Aliquam
            mauris lectus, venenatis id turpis a, tempus tempor augue.
            Suspendisse mollis, sapien non congue tincidunt, sem augue porttitor
            urna, et elementum sapien diam ut orci. Vivamus rutrum, lectus vitae
            hendrerit accumsan, ex sapien congue nisl, sed consequat overview
            neque ut ex. Nullam malesuada auctor elit, ac placerat massa
            scelerisque non.
          </p>
          <p className="about__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum sapien a nisl imperdiet eleifend. Nam odio velit, aliquet
            sit amet consequat nec, lacinia a tortor. Vivamus tellus purus,
            rhoncus ut nisl vel, blandit mattis felis. Nam faucibus, purus et
            pulvinar venenatis, overview arcu porta quam, quis ornare nunc nulla
            eget nisl. Donec blandit massa at eros semper sodales. Mauris ac
            quam sit amet justo vestibulum viverra. Ut ut purus diam. Aliquam
            mauris lectus, venenatis id turpis a, tempus tempor augue.
            Suspendisse mollis, sapien non congue tincidunt, sem augue porttitor
            urna, et elementum sapien diam ut orci. Vivamus rutrum, lectus vitae
            hendrerit accumsan, ex sapien congue nisl, sed consequat arcu neque
            ut ex. Nullam malesuada auctor elit, ac placerat massa scelerisque
            non.
          </p>
        </div>
        <div
          className="about__content about__content--hide js--second-content"
          ref={content => (this.secondContent = content)}
        >
          <h1 className="about__content-header">History</h1>
          <p className="about__p about__p--bot-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum sapien a nisl imperdiet eleifend. Nam odio velit, aliquet
            sit amet consequat nec, lacinia a tortor. Vivamus tellus purus,
            rhoncus ut nisl vel, blandit mattis felis. Nam faucibus, purus et
            pulvinar venenatis, ligula arcu porta quam, quis ornare nunc nulla
            eget nisl. Donec blandit massa at eros semper sodales. Mauris ac
            quam sit amet justo vestibulum viverra. Ut ut purus diam. Aliquam
            mauris lectus, venenatis id turpis a, tempus tempor augue.
            Suspendisse mollis, sapien non congue tincidunt, sem augue porttitor
            urna, et elementum sapien diam ut orci. Vivamus rutrum, lectus vitae
            hendrerit accumsan, ex sapien congue nisl, sed consequat arcu neque
            ut ex. Nullam malesuada auctor elit, ac placerat massa scelerisque
            non.
          </p>
          <p className="about__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum sapien a nisl imperdiet eleifend. Nam odio velit, aliquet
            sit amet consequat nec, lacinia a tortor. Vivamus tellus purus,
            rhoncus ut nisl vel, blandit mattis felis. Nam faucibus, purus et
            pulvinar venenatis, ligula arcu porta quam, quis ornare nunc nulla
            eget nisl. Donec blandit massa at eros semper sodales. Mauris ac
            quam sit amet justo vestibulum viverra. Ut ut purus diam. Aliquam
            mauris lectus, venenatis id turpis a, tempus tempor augue.
            Suspendisse mollis, sapien non congue tincidunt, sem augue porttitor
            urna, et elementum sapien diam ut orci. Vivamus rutrum, lectus vitae
            hendrerit accumsan, ex sapien congue nisl, sed consequat arcu neque
            ut ex. Nullam malesuada auctor elit, ac placerat massa scelerisque
            non.
          </p>
        </div>
      </AboutStyles>
    )
  }
}
