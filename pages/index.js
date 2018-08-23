import Header from "../components/Header";
import MainContent from "../components/MainContent";
import "../scss/style.scss";

class Index extends React.Component {
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
    const index = "current";
    return (
      <div className="homeWrapper">
        <div id="bg-img">
          <div className="overlay" />
          <Header index={index} />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default Index;
