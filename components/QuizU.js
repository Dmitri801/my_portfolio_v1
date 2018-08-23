import React from "react";
import Grid from "@material-ui/core/Grid";
import { Spring, Transition } from "react-spring";
const PetFam = ({ visible }) => {
  return (
    <Grid className="projects" container spacing={8}>
      <Grid item md={6} xs={12}>
        <a
          aria-label="QuizU Page"
          target="_blank"
          href="https://expo.io/@dmitriy88/quizu"
        >
          <img
            className="showcase-img-petfam"
            src="../static/quizu.png"
            alt="PetFam"
          />
        </a>
        <a
          aria-label="QuizU Page"
          target="_blank"
          href="https://expo.io/@dmitriy88/quizu"
          className="btn btn-light"
        >
          <i className="fas fa-eye" /> QuizU
        </a>
        <a
          aria-label="QuizU Github Page"
          target="_blank"
          href="https://github.com/Dmitri801/quizU"
          className="btn btn-dark"
        >
          <i className="fab fa-github" /> GitHub
        </a>
      </Grid>
      <Grid item xs={6}>
        <div className="img-content">
          <h3>QuizU</h3>
          <p>
            QuizU was the final project for the Udacity Nanodegree program, it
            has a pretty slick UI featuring the React-Native-Flip-Card library,
            which most likely is used in popular apps like Tinder. Check out the
            review from the Udacity Instructor -{" "}
            <span className="text-primary">
              "Great job, impressive, congrats I love the flip animation, the
              input validations, the navigation experience, everything!"
            </span>
          </p>
          <h3>Technologies:</h3>
          <p>React Native</p>
          <p>Redux</p>
          <p>Async Storage</p>
          <p>Reat Native Elements</p>
          <p>Notifications</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default PetFam;
