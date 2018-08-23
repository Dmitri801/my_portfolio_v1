import React from "react";
import Grid from "@material-ui/core/Grid";
import { Spring, Transition } from "react-spring";
const PetFam = ({ visible }) => {
  return (
    <Grid className="projects" container spacing={8}>
      <Grid item md={6} xs={12}>
        <a
          aria-label="Pet Fam Page"
          target="_blank"
          href="https://expo.io/@dmitriy88/pet-fam"
        >
          <img
            className="showcase-img-petfam"
            src="../static/petfam1.jpg"
            alt="PetFam"
          />
        </a>
        <a
          aria-label="Pet Fam Page"
          target="_blank"
          href="https://expo.io/@dmitriy88/pet-fam"
          className="btn btn-light"
        >
          <i className="fas fa-eye" /> Pet Fam -
        </a>
        <a
          aria-label="Pet Fam Github Page"
          target="_blank"
          href="https://github.com/Dmitri801/pet_fam"
          className="btn btn-dark"
        >
          <i className="fab fa-github" /> GitHub
        </a>
      </Grid>
      <Grid item xs={6}>
        <div className="img-content">
          <h3>Pet Fam</h3>
          <p>
            Pet Fam is a mobile app, compatible with both Android and iOS
            devices, that lets you search the many animal shelters near the zip
            code you enter in. Choose from a wide array of animals including
            dogs, cats, reptiles, and even barnyard animals. Pet Fam uses one of
            the largest animal adoption APIs, and is slick and simple, letting
            you browse through animals looking for a new fam.
          </p>
          <h3>Technologies:</h3>
          <p>React Native</p>
          <p>Redux</p>
          <p>Fetch API</p>
          <p>Reat Native Elements</p>
          <p>Petfinder API</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default PetFam;
