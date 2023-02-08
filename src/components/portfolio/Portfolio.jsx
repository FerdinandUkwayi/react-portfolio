import "./portfolio.css";


const Portfolio = () => {
    return (
      <section className="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portolio__item-img">
              <img src="/asset/portfolio1.jpg" className="portfolio__item-img" alt="" />
            </div>
            <h3>This is a portfolio item Title</h3>
            <div className="portfolio__item-cta">    
            <a href="https://github.com" target="blank" className="btn">GitHub</a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portolio__item-img">
              <img src="/asset/portfolio2.jpg" className="portfolio__item-img" alt="" />
            </div>
            <h3>This is a portfolio item Title</h3>
            <div className="portfolio__item-cta">    
            <a href="https://github.com" target="blank" className="btn">GitHub</a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portolio__item-img">
              <img src="/asset/portfolio3.jpg" className="portfolio__item-img" alt="" />
            </div>
            <h3>This is a portfolio item Title</h3>
            <div className="portfolio__item-cta">    
            <a href="https://github.com" target="blank" className="btn">GitHub</a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portolio__item-img">
              <img src="/asset/portfolio4.jpg" className="portfolio__item-img" alt="" />
            </div>
            <h3>This is a portfolio item Title</h3>
            <div className="portfolio__item-cta">    
            <a href="https://github.com" target="blank" className="btn">GitHub</a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portolio__item-img">
              <img src="/asset/portfolio5.png" className="portfolio__item-img" alt="" />
            </div>
            <h3>This is a portfolio item Title</h3>
            <div className="portfolio__item-cta">    
            <a href="https://github.com" target="blank" className="btn">GitHub</a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portolio__item-img">
              <img src="/asset/portfolio6.jpg" className="portfolio__item-img" alt="" />
            </div>
            <h3>This is a portfolio item Title</h3>
            <div className="portfolio__item-cta">    
            <a href="https://github.com" target="blank" className="btn">GitHub</a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
            </div>
          </article>
        </div>
      </section>
    );
}
 
export default Portfolio;