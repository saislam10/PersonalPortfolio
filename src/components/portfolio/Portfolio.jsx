import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Portfolio1.png";
import MobilePic from "../../assets/MobilePic.png";
import Loupt from "../../assets/Loupt.png";
import College from "../../assets/College.png";
import Forest from "../../assets/Forest.png";
import Bio from "../../assets/Bio.png";
import Wallet from "../../assets/Wallet.png";
import Kaggle1 from "../../assets/Kaggle1.png";
import Kaggle2 from "../../assets/Kaggle2.png";
const webData = [
  {
    id: 1,
    image: Loupt,
    title: "Loupt",
    demo: "https://beta.investloupt.com/",
  },
  {
    id: 2,
    image: College,
    title: "CollegeEssayInstructor",
    demo: "https://collegeessayinstructor.com/",
  },
  {
    id: 3,
    image: Forest,
    title: "Forest Systems",
    demo: "https://forestsystems.com/",
  },
  {
    id: 4,
    image: Bio,
    title: "Biology Marketing App (WIP)",
    demo: "https://bio-marketing.vercel.app",
  },
  {
    id: 5,
    image: Wallet,
    title: "Copyright Wallet",
    demo: "https://copyrightwallet.vercel.app",
  },
  {
    id: 6,
    image: IMG1,
    title: "Memento Memories",
    demo: "https://mementomemories.com",
  },
];
const mobileData = [
  {
    id: 8,
    image: MobilePic,
    title: "WeatherMate Kotlin App",
    github: "https://github.com/saislam10/WeatherMate",
    demo: "https://mementomemories.com",
  },
  {
    id: 9,
    image: Kaggle1,
    title: "Student Performance Machine Learning Kaggle Challenge",
    github: "https://github.com/Remezo/Kaggle--StudentPlay",
  },
  {
    id: 10,
    image: Kaggle2,
    title: "Stroke Classification Deep Learning Kaggle Challenge",
    github: "https://github.com/tahmidawal/Project",
  },
];


const PortfolioItem = ({ data, type }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={data.image} alt={data.title} />
      </div>
      <h3>{data.title}</h3>
      <div className="portfolio__item-cta">
        <a href={type === "web" ? data.demo : data.github} target='_blank' rel="noreferrer" className="btn">
          {type === "web" ? "Live Site" : "Repository"}
        </a>
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2>
      <h2> Web Development </h2>
      <div className="container portfolio__container">
        {webData.map(data => <PortfolioItem key={data.id} data={data} type="web" />)}
      </div>
      <br /><br />
      <h2> Mobile Development and Artificial Intelligence </h2>
      <div className="container portfolio__container">
        {mobileData.map(data => <PortfolioItem key={data.id} data={data} type="mobile" />)}
      </div>
    </section>
  );
};

export default Portfolio;
