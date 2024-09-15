import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Us</h1>
                <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={ profile_img } alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>Any Food Developing app services, Maintanence of food delivery app. </p>
<p>Any Manufacturing company websites, who can do their business online. to generate more sails compare to inperson sales. </p>
<p>Staffing and Recruiting services also we are helping people to find out right candidate in the market.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Personal Websites90%</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>Company Websites50%</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Mobile Apps60%</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Interior Design Websites40%</p><hr style={{width:"40%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                    <p>Practical Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                  <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>85+</h1>
                  <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
