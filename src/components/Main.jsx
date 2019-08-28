import React from 'react'
import PropTypes from 'prop-types'
import Projects from '../components/Projects'
import { Box, Card, Image, Heading, Text } from 'rebass'

import communication from '../images/communication.jpg'
import tyler from '../images/tyler.png'

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
        {/* ============================================================================ */}
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <Box>
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              }}
            >
              <Image src={communication} />
              <Box px={2}>
                
                <Text fontSize={0}>
                  <p>
                    I have a strong passion for tech. I have played around with
                    computers since I was old enough to walk. I am into coding,
                    penetration testing, ethical hacking, and building rigs. I
                    recently completed a full-stack boot camp at UNCC and I've
                    now begun coding projects of my own. I chose to switch to
                    this career path for a sense of purpose rather than just
                    punching a clock. By the way, check out my{' '}
                    <a href="https://github.com/TylerCEdge" target="blank">awesome work</a>.
                  </p>
                  <p>
                    I consider what I do to be an art form that allows me to
                    harness my creativity and passion to augment others day to
                    day lives positively. My projects that have been uploaded to
                    GitHub post-boot camp tend to gravitate towards gaming but
                    as my skills grow I would love to create platforms for the
                    health care field as well as apps/technology to assist the
                    disabled. I have also recently enrolled in a Penetration
                    Testing and Ethical Hacking course via Cybrary. Feel free to
                    message me if you would like to know more!
                  </p>
                </Text>
              </Box>
            </Card>
          </Box>
          {close}
        </article>
        {/* ============================================================================ */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <Projects />

          {close}
        </article>
        {/* ============================================================================ */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <Box>
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              }}
            >
              <Image
                src={tyler}
                display="block"
                marginTop="5px"
                marginLeft="auto"
                marginRight="auto"
                marginBottom="5px"
                sx={{
                  width: ['100%', '50%'],
                  borderRadius: 8,
                }}
              />
              <Box px={2}>
                <Heading as="h3">Tyler Christopher Edge</Heading>
                <Text fontSize={0}>
                  <p>Location: Lake Wylie, SC</p>
                  <p>
                    Hey, everyone, my name is Tyler Christopher Edge. I was born
                    and raised in Clover, South Carolina. Go Tigers! Currently,
                    I do not have a job in the tech field but I used to be a
                    Tech and Mobile Sales Supervisor at Staples for 4 years. I
                    enjoy gaming and music in my free time (R.I.P. for the next
                    six months). I also have a custom-built desktop{' '}
                    <a
                      href="https://pcpartpicker.com/list/KqrYCb"
                      target="blank"
                    >
                      check it out
                    </a>
                    ! I drive a 2013 VW CC R-Line (6 speed manual by the way). I
                    also used to ride motorcycles. I have a 2013 Kawasaki Ninja
                    300R in storage and I have been down. I took a 30-yard slide
                    across the asphalt on a 110 degree summer day in a t-shirt.
                    My father graduated from North Myrtle Beach High the same
                    year as Vanna White and was her escort at prom. That side of
                    my family has been in Myrtle beach as far back as the civil
                    war as far as we can track. Edge stands for hill dwellers
                    which makes sense since my father's family is mostly farmers
                    or agriculture majors.
                  </p>

                  <p>
                    My mother's side of the family is Polish and we supposedly
                    have family ties to royalty somewhere down the line. My
                    grandfather was a small cargo pilot and I flew a plane at 4
                    years old! My mother almost had a heart attack over that
                    one! I was also in the South Carolina State Honors Choir in
                    Elementary school and used to play trumpet and french horn.
                    My dad's cousin has a side company that designs{' '}
                    <a
                      href="https://www.youtube.com/watch?v=GKJqH7-KepI"
                      target="blank"
                    >
                      electronic hair-trigger equipped rifles
                    </a>
                    . I would love to live in Colorado and my favorite dog is a
                    Caucasian Shepherd. Feel free to contact me if you want to
                    know more!
                  </p>
                </Text>
              </Box>
            </Card>
          </Box>
          {close}
        </article>
        {/* ============================================================================ */}
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
                href="https://docs.google.com/document/d/11_OQHxzBu_dA8fwsj9u3ArT3i8vHnOdWgEry89BZ6sE/edit?usp=sharing"
                target="blank"
                className="icon fa-file"
              >
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tylercedge/"
                target="blank"
                className="icon fa-linkedin-square"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/10860189/tyler-edge"
                target="blank"
                className="icon fa-stack-overflow"
              >
                <span className="label">Stack Overflow</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TylerCEdge"
                target="blank"
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
