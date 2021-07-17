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
          <nav class="nav">
            <input type="checkbox" id="nav__checkbox" class="nav__checkbox" />
            <label for="nav__checkbox" class="nav__toggle">
              <svg class="menu" viewBox="0 0 448 512" width="100" title="bars">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              </svg>
              <svg
                class="close"
                viewBox="0 0 384 512"
                width="100"
                title="times"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </label>
            <ul class="nav__menu">
              <li>
                <a href="./drag">
                  <svg viewBox="0 0 384 512" width="100" title="chess-rook">
                    <path d="M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" />
                  </svg>
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
