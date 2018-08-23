import React from "react";
import Grid from "@material-ui/core/Grid";

const Newzette = () => {
  return (
    <div>
      <Grid className="projects" container spacing={8}>
        <Grid item md={6} xs={12}>
          <div className="img-content">
            <h3>Newzette</h3>
            <p>
              Newzette is the epitome of a single page application, offering 4
              different views all on one route. I built this project in around 3
              hours, and it lets you search the NewsAPI in a fun, quick way so
              you can get your daily news. Choose from searching top headlines,
              or random queries from one of the top news APIs in the world!
            </p>
            <h3>Technologies:</h3>
            <p>NextJS</p>
            <p>React-Reveal</p>
            <p>Sass</p>
            <p>NodeJS/Express</p>
            <p>Asynchronous Javascript w/ isomorphic unfetch</p>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <a
            aria-label="Newzette Page"
            target="_blank"
            href="https://newzette.now.sh/"
          >
            <img
              className="showcase-img"
              src="../static/newzette.png"
              alt="NEWZ"
            />
          </a>
          <a
            aria-label="Newzette Page"
            target="_blank"
            href="https://newzette.now.sh"
            className="btn btn-light"
          >
            <i className="fas fa-eye" /> Newzette
          </a>
          <a
            aria-label="Newzette github Page"
            target="_blank"
            href="https://github.com/Dmitri801/newzette"
            className="btn btn-dark"
          >
            <i className="fab fa-github" /> GitHub
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Newzette;
