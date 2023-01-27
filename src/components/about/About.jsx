import React from 'react'
import './About.css'
import MeAgain from '../../assets/MeAgain.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { FaSchool } from 'react-icons/fa'
const About = () => {
  return (
  <section id='about'>
    <h5> Get To Know </h5>
    <h2> About Me </h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>

        <img src={MeAgain} alt='Me in Bangladesh' /> 
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          
          <article className='about__card'>
            {/* <a target='_blank' href='https://www.credly.com/badges/b12f19a6-43c8-4927-bb04-bc6cb9667b81/linked_in_profile'> */}

            <FaAward className='about__icon'/>
            <h5 > Certification </h5>
            <small> Full-Stack Development </small>
            {/* </a> */}
          </article>
          <article className='about__card'>
            <FaSchool className='about__icon'/>
            <h5> School </h5>
            <small> Third-Year at Davidson College </small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5> Clients </h5>
            <small> Multiple as part of 'H and O Tech' </small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5> Projects </h5>
            <small> Self-Guided + Bootcamp </small>
          </article>
        </div>

        <p>
          Hi there! I am Safwan Islam, an aspiring Software Engineer. I currently attend Davidson College (c/o 2024)
          and am majoring in Computer Science. Over Summer 2022, I earned a Full-Stack Web Development certificate from
          UNC Charlotte School of Professional Studies. Shortly after, I joined "H and O Technologies," a small startup
          created by college students just like me, where I oversee the UI and Frontend sector for clients. So far, we have had a handful of
          projects and made around $10k in revenue. Outside of coding, I am a huge soccer fan (#COYS), and love to travel.
        </p>

        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        
      </div>
    </div>
  </section>  
)
}

export default About