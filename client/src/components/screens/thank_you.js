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

          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
      );
    } else {
      return (
        <div>
          <div class="backgroundset">
            <nav class="navbar">
              <div class="logo">
                <a href="/drag" class="navbar-brand animated flip">
                  Web Pazuru{" "}
                </a>
              </div>
              <a href="/drag" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </a>
              <div class="navbar-links">
                <ul>
                  <li>
                    <a href="/rules">Rules</a>
                  </li>
                  <li>
                    <button onClick={this.logoutHandler}>logout</button>
                  </li>
                </ul>
              </div>
            </nav>
            <div>
              <h1> Thank You {username}! </h1>
              Hope you have enjoyed the game <br />
              Game is Over now! <br />
              Your Total Score is {score}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default thankyou;
