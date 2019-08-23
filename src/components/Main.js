import React from 'react'
import PropTypes from 'prop-types'



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
          <p>After working in the tech industry for several years and falling absolutely in love with the space, I decided to take the leap and become a web developer. Working closely with marketing, product managers, and web developers in both a small start up environment and for a bigger corporation taught me how to collaborate across teams, communicate effectively, and how to juggle different sets of priorities. </p>
          <p>
          Some of my strengths are that I am detail oriented, a thorough planner, and attack problems in an analytical way. I love learning new things, and enjoy the challenge of tackling new concepts and pushing myself outside of my comfort zone. </p>
         <p> In my free time I enjoy hiking with my dogs, checking out new brunch spots, and traveling with my boyfriend.</p>
         
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <h2 className='skillsbd'>Languages</h2>
          <div className='skills'>
          <p>Javascript</p> <span className='icon fa-circle'></span>
          <p>Python</p><span className='icon fa-circle'></span>
          <p>PHP</p><span className='icon fa-circle'></span>
          <p>HTML5</p><span className='icon fa-circle'></span>
          <p>CSS3</p>
          </div>
          <h2 className='skillsbd'>Frameworks & Libraries</h2>
          <div className='skills'>
          <p>React</p><span className='icon fa-circle'></span>
          <p>Node.js</p><span className='icon fa-circle'></span>
          <p>Express.js</p><span className='icon fa-circle'></span>
          <p>Massive.js</p><span className='icon fa-circle'></span>
          <p>Redux.js</p><span className='icon fa-circle'></span>
          <p>React Redux</p><span className='icon fa-circle'></span>
          <p>Flask</p><span className='icon fa-circle'></span>
          <p>Django</p><span className='icon fa-circle'></span>
          <p>Bulma.io</p><span className='icon fa-circle'></span>
          <p>Jest</p><span className='icon fa-circle'></span>
          <p>Cypress</p>
          
          </div>
          <h2 className='skillsbd'>Databases</h2>
          <div className='skills'>
          <p>PostgreSQL</p><span className='icon fa-circle'></span>
          <p>SQLite</p> 
          
          </div>
          <h2 className='skillsbd'>Extra Technologies</h2>
          <div className='skills'>
          <p>Chart.js</p><span className='icon fa-circle'></span>
          <p>Gatsby.js</p><span className='icon fa-circle'></span>

          <p>Styled Components</p><span className='icon fa-circle'></span>
          <p>Axios</p><span className='icon fa-circle'></span>
          <p>Bcrypt</p><span className='icon fa-circle'></span>
          <p>Jira</p><span className='icon fa-circle'></span>
          <p>Git</p><span className='icon fa-circle'></span>
          <p>Netlify</p>
          </div>
          
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"> Projects</h2>
          <h2 className="skillsbd">Capstone Projects</h2>
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
          <h2 className="skillsbd">Mini Projects</h2>
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
         
         
        
          {/* <form name="contact" method="POST" data-netlify="true">
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
          <h2 className="major">Contact</h2>
            
            <li><a href="mailto:cathmond25@gmail.com" className="icon fa-envelope" id='icon'><span className="label">Email</span></a><a href="mailto:cathmond25@gmail.com" style={{border:'none'}}><button>Email</button></a></li>
          
            <li><a href="https://www.linkedin.com/in/catie-mondon/" className="icon fa-linkedin" id='icon'><span className="label">LinkedIn</span></a> <a href="https://www.linkedin.com/in/catie-mondon/" style={{border: 'none'}}><button>LinkedIn</button></a></li>
            
            
            <li><a href="https://github.com/catiemondon" className="icon fa-github" id='icon'><span className="label">GitHub</span></a><a href="https://github.com/catiemondon"style={{border:'none'}}><button>github</button></a></li>
            
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