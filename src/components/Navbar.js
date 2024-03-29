import React from 'react'
import { Link } from 'gatsby'
import logo_white from '../img/logo_white.svg'
import Fade from 'react-reveal/Fade';
//import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  componentDidMount() {

  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo_white} alt="hjartatåre" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
                      <Fade bottom cascade>

          {/*    <AniLink cover top="entry"
                direction="left"
                duration={1} to="/about">
                About 1
              </AniLink> */}
            <Link className="navbar-item" to="/about">
              About
            </Link>

              <Link className="navbar-item" to="/products">
                Work
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </Fade>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
