import React from 'react'
import PropTypes from 'prop-types'


import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import profilepic from '../images/profilepic.jpg'
import foodmood from '../images/foodmood.mp4'

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
          <p>Jira</p><span className='icon fa-circle'></span>
          <p>Styled Components</p> <span className='icon fa-circle'></span>
          <p>Chart.js</p>
          <p>Gatsby.js</p>
          </div>
          
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"> Projects</h2>
          <h2 className="major">Capstone Projects</h2>
          <h3>ChartSmart </h3>
          <span className="image main">
          <iframe src="https://www.youtube.com/embed/dZpB80auU3w"  allowFullScreen frameBorder="0"/>
          </span>
          <p className="techs">React  || PostgreSQL || Express || Bcrypt ||  Node.js || HTML5 || Axios || Chart.js</p>
          <h4>July 2019: ChartSmart</h4>
          <p className='proj_desc'>A group developed project created to help doctors be able do their charting and have a clean, easy way to show their patients how their health is trending over time. Patients may login into their office created profile to see charts of their bloodwork and vital results over time.</p>
          <p className='proj_links'>Live Site: <a href='https://chartsmart.us'>chartsmart.us</a></p>
          <p className='proj_links'>GitHub Repo: <a href='https://github.com/medic-wlh5/ChartSmart'>github.com/medic-wlh5/ChartSmart</a></p>

          <h3>FoodMood</h3>
          <span className="image main">
          <video width='100%' controls>
            <source src={foodmood} type='video/mp4'></source>
          </video>
          </span>
          <p className="techs">React || PostgreSQL || Express || Bcrypt || Styled Components || Node.js || HTML5 || Axios</p>
          <h4>June 2019: FoodMood</h4>
          <p className='proj_desc'>A personally developed project created to be a "dish first" based food search app, unlike other apps in the space that focus on restaurant based search results. Users can find dishes in the location they select, can filter by category, and may add dishes to their favorites if they have a profile.</p>
          <p className='proj_links'>Live Site: <a href='https://thefoodmood.us'>thefoodmood.us</a></p>
          <p className='proj_links'>GitHub Repo: <a href='https://github.com/catiemondon/FoodMood'>github.com/catiemondon/FoodMood</a></p>
          <h2 className="major">Mini Projects</h2>
          <h3>FlaskAuth </h3>
          <span className="image main">
          <iframe src="https://www.youtube.com/embed/0QBhJ--Wlfw"  allowFullScreen frameBorder="0"/>
          </span>
          <p className="techs">Python || Flask || SQLite || Django ||  HTML5 || Bulma </p>
          <h4>July 2019: FlaskAuth</h4>
          <p className='proj_desc'> A personally developed mini project to practice building a python based server for authentication. Users can create a profile, login, and have restricted page permissions based on their session status. </p>
       
          <p className='proj_links'>GitHub Repo: <a href='https://github.com/catiemondon/FlaskAuth'>github.com/catiemondon/FlaskAuth</a></p>
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
            
            <li><a href="mailto:cathmond25@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a><a href="mailto:cathmond25@gmail.com" style={{border:'none'}}><p>cathmond25@gmail.com</p></a></li>
          
            <li><a href="https://www.linkedin.com/in/catie-mondon/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a> <a href="https://www.linkedin.com/in/catie-mondon/" style={{border: 'none'}}><p>linkedin.com/in/catie-mondon</p></a></li>
            
            
            <li><a href="https://github.com/catiemondon" className="icon fa-github"><span className="label">GitHub</span></a><a href="https://github.com/catiemondon"style={{border:'none'}}><p>github.com/catiemondon</p></a></li>
            
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