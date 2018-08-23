import Link from "next/link";
import classnames from "classnames";
class Header extends React.Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  render() {
    const { showMenu } = this.state;
    const { index, showCase, bio, work, contact } = this.props;
    return (
      <div>
        <header>
          {index || showMenu ? (
            <div className="downloadResume">
              <a
                aria-label="download resume"
                href="/file/download"
                className="download-btn"
              >
                Download Resume
              </a>
            </div>
          ) : null}

          <div
            className={showMenu ? "menu-btn close" : "menu-btn"}
            onClick={this.toggleMenu}
          >
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <nav className={showMenu ? "menu show" : "menu"}>
            <div className={showMenu ? "menu-branding show" : "menu-branding"}>
              {!bio && <div className="portrait" />}
            </div>
            <ul className={showMenu ? "menu-nav show" : "menu-nav"}>
              <li
                className={classnames("nav-item", {
                  show: showMenu,
                  current: index
                })}
              >
                <Link href="/">
                  <a aria-label="Home" className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={classnames("nav-item", {
                  show: showMenu,
                  current: bio
                })}
              >
                <Link href="/bio">
                  <a aria-label="Bio" className="nav-link">
                    Bio
                  </a>
                </Link>
              </li>
              <li
                className={classnames("nav-item", {
                  show: showMenu,
                  current: work
                })}
              >
                <Link href="/work">
                  <a aria-label="Work" className="nav-link">
                    Work
                  </a>
                </Link>
              </li>
              <li
                className={classnames("nav-item", {
                  show: showMenu,
                  current: contact
                })}
              >
                <Link href="/contact">
                  <a aria-label="Contact" className="nav-link">
                    Get In Touch
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
