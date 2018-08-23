import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
const Portfolio = () => {
  return (
    <Grid className="projects" container spacing={8}>
      <Grid item md={6} xs={12}>
        <Link href="/">
          <a aria-label="Portfolio Page">
            <img
              className="showcase-img"
              src="../static/portfolio1.png"
              alt="PetFam"
            />
          </a>
        </Link>
        <Link href="/">
          <a aria-label="Portfolio Page" className="btn btn-light">
            <i className="fas fa-eye" /> Portfolio
          </a>
        </Link>
        <a
          aria-label="Portfolio github Page"
          target="_blank"
          href="https://github.com/Dmitri801/my_portfolio_v1"
          className="btn btn-dark"
        >
          <i className="fab fa-github" /> GitHub
        </a>
      </Grid>
      <Grid item xs={6}>
        <div className="img-content">
          <h3>The website you see here...</h3>
          <p>
            Guess this site is pretty cool right? This site uses NextJS on the
            front end, which is a minimalistic framework for server-rendered
            React applications. Its also plugged into a super simple express
            server that registers a service worker, and handles that resume
            download. NextJS , and technologies like it (PWAs or progressive web
            apps), might just be the next best thing in web development.
          </p>
          <h3>Technologies:</h3>
          <p>NextJS</p>
          <p>Nextjs-sass</p>
          <p>Service Workers</p>
          <p>Sass</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Now</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
