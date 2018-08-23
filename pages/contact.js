import Header from "../components/Header";
class Contact extends React.Component {
  render() {
    const contact = "current";
    return (
      <div>
        <Header contact={contact} />
        <main id="work">
          <h3 className="bio-heading text-primary">
            Contact <span className="text-secondary">Me</span>
          </h3>
          <h2 className="sm-bio-heading">
            Get In Touch And Lets Create Together
          </h2>
          <hr className="emphasis" />
          <div className="boxes">
            <div>
              <span className="text-secondary">Email:</span> dsharsh@hotmail.com
            </div>
            <div>
              <span className="text-secondary">Phone Number:</span> 801-856-6823
            </div>
            <div>
              <span className="text-secondary">Address:</span> 480 Brandt Ct,
              Salt Lake City, UT 84107
            </div>
          </div>
        </main>
        <footer id="main-footer">Copyright &copy; 2018</footer>
      </div>
    );
  }
}

export default Contact;
