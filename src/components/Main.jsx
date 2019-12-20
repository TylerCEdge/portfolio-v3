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
                <Text fontSize={1}>
                  <p>
                    I have a strong passion for tech. I have played around with
                    computers since I was old enough to walk. I am into coding,
                    penetration testing, ethical hacking, and building rigs. I
                    recently completed a full-stack boot camp at UNCC and I've
                    now begun coding projects of my own. I chose to switch to
                    this career path for a sense of purpose rather than just
                    punching a clock. By the way, check out my{' '}
                    <a href="https://github.com/TylerCEdge" target="blank">
                      awesome work
                    </a>
                    .
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
                <Text fontSize={1}>
                  <p>Location: Lake Wylie, SC</p>
                  <p>
                    Hey, everyone, my name is Tyler Christopher Edge. I was born
                    and raised in Clover, South Carolina. Go Tigers! I am a
                    recent UNCC Web Development Boot Camp Graduate! I also have
                    a custom-built desktop{' '}
                    <a
                      href="https://pcpartpicker.com/list/KqrYCb"
                      target="blank"
                    >
                      check it out
                    </a>
                    ! My passion for technology started at a young age. I
                    remember our Tandy brand desktop. I remember the MSDOS
                    prompts to play Putt Putt. I remember getting fussed at for
                    messing with settings. I remember Mario Teaches Typing (for
                    all you 90's kids out there). I remember my BCA/IBA/C++/HTML
                    classes in high school ( Mrs. Graves / Dr. Sutton / Mr. Wood
                    / Mrs. Moss ). I remember my boss giving me a shot at
                    selling tech at Staples. It escalated into being the head of
                    the department very quickly. David Bishop took a shot on me
                    and I never made him regret it.
                  </p>

                  <p>
                    I am a bonifide geek and I love it. I love learning about
                    the latest trends in tech. I love debating them. What I love
                    the most about my passion for tech is my ability to help
                    others. The ability to make what others view as the
                    impossible a reality instead. "We don't make mistakes, just
                    happy little accidents" - Bob Ross. While any coder might
                    know it might not always be happy. Accidents are how we
                    learn to grow and become better coders. Who knows maybe my
                    next one will walk my into my next job opportunity.
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
                <input type="submit" value="Send Message" className="special" action="mailto:tylercedge@gmail.com" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://docs.google.com/document/d/1Wnmdcsou2Gx0_GEbF42ifKgs0zVl-44Usn_EERnAab4/edit?usp=sharing"
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
