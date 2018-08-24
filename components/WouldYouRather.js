import React from "react";
import Grid from "@material-ui/core/Grid";
const WouldYouRather = () => {
  return (
    <Grid className="projects" container spacing={8}>
      <Grid item md={6} xs={12}>
        <div className="img-content">
          <h3>Would You Rather?</h3>
          <p>
            Would You Rather? is the final project in the React/Redux portion of
            the Udacity nanodegree. This version of Would You Rather? features a
            fun user interface, that gives the option of signing in as a guest ,
            or registering a new user surpassing the requirements of the
            project. To create an awesome user experience, all forms include a
            validation using revalidate, and many different animations using
            React CSS Transition Groups
          </p>
          <h3>Technologies:</h3>
          <p>ReactJS</p>
          <p>Redux</p>
          <p>Revalidate</p>
          <p>Semantic UI React</p>
          <p>Asynchronous Javascript w/ Axios</p>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <a
          aria-label="WYR Page"
          target="_blank"
          href="http://would_you_rather.surge.sh/"
        >
          <img className="showcase-img" src="../static/wur.jpg" alt="WYR" />
        </a>
        <a
          aria-label="WYR Page"
          target="_blank"
          href="http://would_you_rather.surge.sh/"
          className="btn btn-light"
        >
          <i className="fas fa-eye" /> Would You Rather?
        </a>
        <a
          aria-label="WYR Git hub Page"
          target="_blank"
          href="https://github.com/Dmitri801/udacity_final_wouldyourather"
          className="btn btn-dark"
        >
          <i className="fab fa-github" /> GitHub
        </a>
      </Grid>
    </Grid>
  );
};

export default WouldYouRather;
