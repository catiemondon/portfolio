import React from 'react'
import PropTypes from 'prop-types'


import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import profilepic from '../images/profilepic.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={profilepic} alt="" /></span>
          <p>After working in the tech industry for several years and falling absolutely in love with the space, I decided to take the leap and become a web developer. Working closely with marketing, product managers, and web developers in both a small start up environment and for a bigger corporation taught me how to collaborate across teams, communicate effectively, and how to juggle different sets of priorities. 
          In my free time I enjoy hiking with my dog, checking out new brunch spots, and traveling.</p>
         
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <div className='skills'>
          <p>React</p> <span className='icon fa-circle'></span>
          <p>Javacript</p><span className='icon fa-circle'></span>
          <p>HTML5</p><span className='icon fa-circle'></span>
          <p>CSS3</p><span className='icon fa-circle'></span>
          <p>Redux</p>
          <p>PostgreSQL</p><span className='icon fa-circle'></span>
          <p>Node.js</p><span className='icon fa-circle'></span>
          <p>Express.js</p><span className='icon fa-circle'></span>
          <p>Massive.js</p>
          <p>Git</p><span className='icon fa-circle'></span>
          <p>JIRA</p>
          </div>
          
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          {/* <form method="post" action="#">
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
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul className="icons">
            
            <li><a href="mailto:cathmond25@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a> <p>cathmond25@gmail.com</p></li>
          
            <li><a href="https://www.linkedin.com/in/catie-mondon/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a> <p>linkedin.com/in/catie-mondon</p></li>
            
            
            <li><a href="https://github.com/catiemondon" className="icon fa-github"><span className="label">GitHub</span></a><p>github.com/catiemondon</p></li>
            
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