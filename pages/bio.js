import Header from "../components/Header";

class Bio extends React.Component {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }
  }
  render() {
    const bio = "current";
    return (
      <div>
        <Header bio={bio} />
        <main id="bio">
          <h3 className="bio-heading text-primary">
            My <span className="text-secondary">Bio</span>
          </h3>
          <h2 className="sm-bio-heading">
            Dmitriy Sharshiner
            <span className="text-primary" />
          </h2>
          <hr className="emphasis" />
          <div className="bio-info">
            <img
              src="../static/portrait.jpg"
              alt="Its Me"
              className="bio-img"
            />

            <div className="bio">
              <h3 className="text-secondary">Bio</h3>
              <p>
                Hey there, welcome to my page! My names Dmitriy, and I have been
                developing websites for around 2 years. My specializations
                include HTML, CSS, and various Javascript libraries and
                frameworks. The main technologies i'm working with currently are
                ReactJS, React Native, and NodeJS. My passion is to build
                engaging, interactive, and inspiring user interfaces, while
                having a ton of fun doing it. I plan to continue expanding my
                skills and be a part of the technologies that will shape our
                lives in the future. Enjoy your stay!
              </p>
            </div>
            <div className="job job-1">
              <h3 className="text-primary">Udacity React Nanodegree</h3>
              <h6>React Certified</h6>
              <p>
                In July of 2018 I graduated from the Udacity React Nanodegree,
                check out my rendition of the Would You Rather? Project
                <a
                  target="_blank"
                  href="http://would_you_rather.surge.sh/"
                  className="text-secondary"
                >
                  {" "}
                  here
                </a>
              </p>
            </div>
            <div className="job job-2">
              <h3 className="text-primary">DMI Web Design</h3>
              <h6>Freelance Development</h6>
              <p>
                Over the past few months I have worked on numerous freelance
                projects. Check out{" "}
                <a
                  target="_blank"
                  href="https://expo.io/@dmitriy88/pet-fam"
                  className="text-secondary"
                >
                  {" "}
                  Pet Fam
                </a>
                , a native application that will help you find that special
                friend you were looking for 🐶
              </p>
            </div>
            <div className="job job-3">
              <h3 className="text-primary">Netflix</h3>
              <h6>Customer Service</h6>
              <p>
                I'm currently working for Netflix Customer Service, and have
                been a part of their Technical Support Research training. I have
                also had the opportunity to mentor multiple new hires on my
                team, this has given me the experience of working on teams, and
                even taking up the leadership role of the team I'm on.
              </p>
            </div>
          </div>
        </main>
        <footer id="main-footer">Copyright &copy; 2018</footer>
      </div>
    );
  }
}

export default Bio;
