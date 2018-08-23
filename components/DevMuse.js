import React from "react";
import Grid from "@material-ui/core/Grid";

const DevMuse = () => {
  return (
    <div>
      <Grid className="projects" container spacing={8}>
        <Grid item md={6} xs={12}>
          <div className="img-content">
            <h3>DevMuse</h3>
            <p>
              DevMuse is a social network designed for developers in the music
              industry. The site was developed using the MERN stack, with
              MongoDb as the database, NodeJS and Express handling the
              API/Routing on the backend, and React/Redux on the front end. The
              API is 100% scalable, and can compete with the big "social guys",
              if enough people fell in love with it of course..
            </p>
            <h3>Technologies:</h3>
            <p>ReactJS</p>
            <p>Redux</p>
            <p>MongoDb</p>
            <p>NodeJS/Express</p>
            <p>Asynchronous Javascript w/ Axios</p>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <a
            aria-label="DevMuse Page"
            target="_blank"
            href="https://devmuse.herokuapp.com/"
          >
            <img
              className="showcase-img"
              src="../static/devmuse.jpg"
              alt="WYR"
            />
          </a>
          <a
            aria-label="DevMuse Page"
            target="_blank"
            href="https://devmuse.herokuapp.com/"
            className="btn btn-light"
          >
            <i className="fas fa-eye" /> DevMuse
          </a>
          <a
            aria-label="DevMuse github Page"
            target="_blank"
            href="https://github.com/Dmitri801/DevMuse"
            className="btn btn-dark"
          >
            <i className="fab fa-github" /> GitHub
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default DevMuse;
