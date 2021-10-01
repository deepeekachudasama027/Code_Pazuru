import React, { Component } from "react";
import axios from "axios";

import  event_logo from "./event_logo.png";

require("./preloader.css");
require("./navbar.css");
require("./errorpage.css");

class error_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };

    this.logoutHandler = this.logoutHandler.bind(this);
  }
  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const GetDetails = async () => {
      const userinfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        header: {
          "Content-Type": "application/json",
        },
        id: userinfo._id,
      };

      try {
        const element = await axios.post("/api/auth/getrule_errorpage", config);
        if (element.data === "login required") this.logoutHandler();
        else {
          this.setState({
            username: element.data.username,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    GetDetails();
  }

  logoutHandler() {
    localStorage.removeItem("userInfo");
    this.props.history.push("./login");
  }

  render() {
    const { username } = this.state;
    // loader
    if (this.state.username === "") {
      return (
        <div id="loader-wrapper">
          <div id="loader"></div>

          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      );
    } 
    else { // error page
      return (
        <div className="backgroundset">
          <nav className="nav">
            <input
              type="checkbox"
              id="nav__checkbox"
              className="nav__checkbox"
            />
            <label htmlFor="nav__checkbox" className="nav__toggle">
              <svg
                className="menu"
                viewBox="0 0 448 512"
                width="100"
                title="bars"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              </svg>
              <svg
                className="close"
                viewBox="0 0 384 512"
                width="100"
                title="times"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </label>
            <ul className="nav__menu">
              <li>
                <a href="./game">
                <img src={event_logo} alt="" width="70" height="70"/> 
                </a>
              </li>
              <li>
                <a href="./rules">Rules</a>
              </li>
              <li
                style={{
                  textTransform: "capitalize",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {username}
              </li>
              <li>
                <a href=" " onClick={this.logoutHandler}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
          <div></div>
          <div className="outercontainer">
            <div className="container">
              <h1 style={{ textTransform: "uppercase" }}> OOPS {username}! </h1>
              We can't seem to find the page you're looking for <br />
              Nothing to see here! <br />
              let's Go back! Press the button
              <br />
              <div>
                <a href="/game">
                  <button className="btn1">
                    <span>PLAY</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default error_page;
