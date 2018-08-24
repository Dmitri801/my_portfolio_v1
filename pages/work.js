import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import { Spring, Transition } from "react-spring";
import Link from "next/link";
import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import PetFam from "../components/PetFam";
import WouldYouRather from "../components/WouldYouRather";
import DevMuse from "../components/DevMuse";
import QuizU from "../components/QuizU";
import Portfolio from "../components/Portfolio";
import Newzette from "../components/Newzette";
class Work extends React.Component {
  state = {
    petFamShow: false,
    devMuseShow: false,
    portfolioShow: false,
    wouldYouRatherShow: false
  };
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }

    this.setState({
      wouldYouRatherShow: true
    });

    window.addEventListener("scroll", this.renderPetFam);
    window.addEventListener("scroll", this.renderDevMuse);
    window.addEventListener("scroll", this.renderPortfolio);
  }

  renderPetFam = () => {
    if (window.scrollY > 300) {
      this.setState({
        petFamShow: true
      });
    }
  };

  renderDevMuse = () => {
    if (window.scrollY > 700) {
      this.setState({
        devMuseShow: true
      });
    }
  };

  renderPortfolio = () => {
    if (window.scrollY > 1000) {
      this.setState({
        portfolioShow: true
      });
    }
  };
  render() {
    const {
      petFamShow,
      portfolioShow,
      devMuseShow,
      wouldYouRatherShow
    } = this.state;
    const work = "current";
    return (
      <div>
        <Header work={work} />
        <main id="work">
          <h3 className="bio-heading text-primary">
            My <span className="text-secondary">Work</span>
          </h3>
          <h2 className="sm-bio-heading">Check Out A Few Of My Projects..</h2>
          <hr className="emphasis" />
          <Grid
            className="projects"
            style={{ padding: "20px" }}
            container
            spacing={24}
          >
            <Zoom when={wouldYouRatherShow}>
              <div>
                <WouldYouRather />
              </div>
            </Zoom>
            <Fade big when={petFamShow}>
              <div>
                <PetFam />
              </div>
            </Fade>
            <Zoom duration={500} when={devMuseShow} delay={200}>
              <div>
                <DevMuse />
              </div>
            </Zoom>
            <Fade delay={500} duration={1000}>
              <div>
                <QuizU />
              </div>
            </Fade>
            <Zoom duration={500}>
              <div>
                <Newzette />
              </div>
            </Zoom>
            <Fade duration={500} delay={400}>
              <div>
                <Portfolio />
              </div>
            </Fade>
          </Grid>
        </main>
        <footer id="main-footer">Copyright &copy; 2018</footer>
      </div>
    );
  }
}

export default Work;
