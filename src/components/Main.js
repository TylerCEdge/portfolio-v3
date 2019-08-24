import React from 'react'
import PropTypes from 'prop-types'

import tylernew from '../images/tylernew.jpg'
import tech from '../images/tech.jpg'
import communication from '../images/communication.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={tylernew} alt="" />
          </span>
          <p>
            I have a strong passion for tech. I have played around with
            computers since I was old enough to walk. I am into coding,
            penetration testing, ethical hacking, and building rigs. I recently
            completed a full stack boot camp @ UNCC and I've now begun coding
            projects of my own. I made a choice to switch to this career path
            for a sense of purpose rather than just punching a clock. By the
            way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            I consider what I do to be an art form that allows me to harness my
            creativity and passion to augment others day to day lives in a
            positive manner. My projects that have been uploaded to GitHub post
            boot camp tend to gravitate towards gaming but as my skills grow I
            would love to create platforms for the health care field as well as
            apps/technology to assist the disabled. I have also recently
            enrolled in a Penetration Testing and Ethical Hacking course via
            Cybrary. Feel free to message me if you would like to know more!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={tech} alt="" />
          </span>
          <ul>
            <li>
              <b>Application architecture</b>
            </li>
            <li>
              <b>Javascript</b> - (native, ReactJS, jQuery, Vue, Gatsby, Angular
              etc).
            </li>
            <li>
              <b>CSS3</b> - (native and using technology SASS, Twitter
              Bootstrap).
            </li>
            <li>
              <b>Server Side</b> - HTML, NodeJS
            </li>
            <li>
              <b>Database architecture and design</b> (MySQL, MS SQL, MongoDB,
              GraphQL, CMS).
            </li>
            <li>
              <b>Tools</b> - GIT, Postman, Parrot Sec OS, Kali Linux.
            </li>
            <li>
              <b>Kali/Parrot Related Tools</b> - Airgeddon, Metasploit,
              Armitage, Maltego, BurpSuite, SET, Beef, Nmap, WPscan, Skipfish,
              Nikto.
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={communication} alt="" />
          </span>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={communication} alt="" />
          </span>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={communication} alt="" />
          </span>
          <p>
            Hey everyone my name is Tyler Christopher Edge. I was born and
            raised in Clover, South Carolina. Go Tigers! Currently I do not have
            a job in the tech field but I used to be a Tech and Mobile Sales
            Supervisor at Staples for 4 years. I enjoy gaming and music in my
            free time (R.I.P. for the next six months). I also have a custom
            built desktop{' '}
            <a href="https://pcpartpicker.com/list/KqrYCb" target="blank">
              check it out
            </a>
            ! I drive a 2013 VW CC R-Line (6 speed manual by the way). I also
            used to ride motorcycles. I have a 2013 Kawasaki Ninja 300R in
            storage and I have been down. I took a 30 yard slide across the
            asphault on a 110 degree summer day in a t-shirt. My father
            graduated from North Myrtle Beach High the same year as Vanna White
            and was her escort at prom. That side of my family has been in
            Myrtle beach as far back as the civil war as far as we can track.
            Edge stands for hill dwellers which makes since since my fathers
            family is mostly farmers or agriculture majors.
          </p>

          <p>
            My mothers side of the family is Polish and we supposedly have
            family ties to royalty somewhere down the line. My grandfather was a
            small cargo pilot and I flew a plane at 4 years old! My mother
            almost had a heart attack over that one! I was also in State Honors
            Choir in Elementary school and used to play trumpet and french horn.
            My dads cousin has a side company that designs{' '}
            <a
              href="https://www.youtube.com/watch?v=GKJqH7-KepI"
              target="blank"
            >
              electronic hair trigger equipped rifles
            </a>
            . I would love to live in Colorado and my favorite dog is a
            Caucasian Shepherd. Feel free to contact me if you want to know
            more!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/tylercedge"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TylerCEdge"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TylerCEdge"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TylerCEdge"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
