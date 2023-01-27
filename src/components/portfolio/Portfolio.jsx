import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Portfolio1.png";
import IMG2 from "../../assets/Portfolio2.png";
import IMG3 from "../../assets/Portfolio3.png";
import IMG4 from "../../assets/Portfolio4.png";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "MementoMemories",
    github: "https://gitfront.io/r/user-1443730/RwBoq9xNzvyx/Memento/",
    demo: "https://mementomemories.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "JavaLocator",
    github: "https://github.com/alicessilva22/Java-Locator",
    demo: "https://github.com/alicessilva22/Java-Locator",
  },
  {
    id: 3,
    image: IMG3,
    title: "FavMovies",
    github: "https://github.com/okdavekk/movie-preferences",
    demo: "https://github.com/okdavekk/movie-preferences",
  },
  {
    id: 4,
    image: IMG4,
    title: "TrendingMusic",
    github: "https://github.com/saislam10/TrendingMusic",
    demo: "https://saislam10.github.io/TrendingMusic/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target='_blank' className="btn">
                  Repository
                </a>
                <a href={demo} target='_blank' className="btn btn-primary">
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
