import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I Have</h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development </h3>
          <div className="experience__content">
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> HTML </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> CSS </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> JavaScript </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Bootstrap </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> React </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> MERN </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> Backend Development </h3>
          <div className="experience__content">
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> NodeJS </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> MySQL </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> MongoDB </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Python </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> FireBase </h4>
                <small className="text-light"> Basic </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> MERN </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__school">
          <h3> School Coursework </h3>
          <div className="experience__content">
          <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Programming and Problem-Solving </h4>
                <small className="text-light"> Python </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Data Structures </h4>
                <small className="text-light"> Java </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Linear Algebra </h4>
                <small className="text-light"> Mathematica </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Discrete Structures </h4>
                <small className="text-light"> Racket </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Computer Organization </h4>
                <small className="text-light"> C </small>
              </div>
            </article>
            <article className="experience__detials">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Calculus 1, 2, 3 </h4>
                {/* <small className="text-light"> Intermediate </small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
