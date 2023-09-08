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
            <small> Senior at Davidson College </small>
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
          Hi, I'm Safwan Islam, a Computer Science major at Davidson College (c/o 2024). In Summer 2022, I secured a Full-Stack Web Development certificate from UNC Charlotte and later joined a student-led startup "H and O Technologies," leading their UI and Frontend. Our team successfully completed multiple projects, amassing $10k in revenue. Additionally, in Summer 2023, I collaborated with Dr. Laurie Heyer at Davidson on an HTML-to-ePUB conversion project and contributed to Forest Systems' frontend as their intern. Presently, I'm the head of frontend development at Loupt, a budding crowdfunding startup. Beyond tech, I'm an avid soccer fan (#COYS) and love exploring new places (visited 12 countries in 2023!).
        </p>

        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        
      </div>
    </div>
  </section>  
)
}

export default About