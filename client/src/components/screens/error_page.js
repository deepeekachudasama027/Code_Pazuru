import React, { Component } from "react";
import axios from "axios";
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
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      try {
        const element = await axios.post("/api/auth/getdetails", config);
        if (element.data === "login required") {
          this.logoutHandler();
        } else {
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
    localStorage.removeItem("authToken");
    window.location.href = "./login";
  }

  render() {
    const { username } = this.state;
    if (this.state.username === "") {
      return (
        <div id="loader-wrapper">
          <div id="loader"></div>

          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      );
    } else {
      return (
        <div className="backgroundset">
          <nav className="navbar">
            <div className="logo">
              <a href="/drag" className="navbar-brand animated flip">
                Web Pazuru{" "}
              </a>
            </div>
            <a href="/drag" className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <div className="navbar-links">
              <ul>
                <li>
                  <a href=" " onClick={this.logoutHandler}>
                    logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="outercontainer">
            <div className="container1">
              <h1 style={{ textTransform: "uppercase" }}> OOPS {username}! </h1>
              We can't seem to find the page you're looking for <br />
              Nothing to see here! <br />
              let's Go back! Press the button
              <br />
              <div>
                <a href="/drag">
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
