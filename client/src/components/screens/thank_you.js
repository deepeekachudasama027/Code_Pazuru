import React, { Component } from "react";
import axios from "axios";
require("./thankyou.css");
require("./preloader.css");
require("./navbar.css");
class thankyou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
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
            score: element.data.score,
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
    const { score, username } = this.state;
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
        <div>
          <div className="backgroundset">
            <nav className="navbar">
              <div className="logo">
                <a href="/drag" class="navbar-brand animated flip">
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
                    <a href="/rules">Rules</a>
                  </li>
                  <li>
                    <a href=" " onClick={this.logoutHandler}>
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="outercontainer">
              <div className="container">
                <h1> Thank You {username}! </h1>
                <p id="message">
                  Game is Over now! <br />
                  Your Total Score is {score}
                  <br />
                  Hope you have enjoyed the game <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default thankyou;
