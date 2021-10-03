import React, { Component } from "react";
import axios from "axios";
import event_logo from "./event_logo.png";
require("./preloader.css");
require("./navbar.css");
require("./rules.css");

class rules extends Component {
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
    //loader
    if (this.state.username === "") {
      return (
        <div id="loader-wrapper">
          <div id="loader"></div>

          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      );
    } //rules page
    else {
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
                  <img src={event_logo} alt="" width="70" height="70" />
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
          <div className="ocontainer">
            <div className="container1">
              RULES
              <br />
              <br />
              There will be two rounds, first round will be held on 9th oct,
              2021 and second on 10th oct, 2021
              <br />
              <br />
              1. In this game, the player has to arrange the shuffled code in
              the correct order. There will be codes belonging to different
              languages, and by analyzing the code, you have to arrange it in
              the correct order.
              <br />
              2. To drag an element, use the top-down icon that's there on
              rightmost side of each element.
              <br />
              3. The order of function definition is same as the order in which
              they are invoked.
              <br />
              4. Each player will be given 400 coins in the beginning; use them
              wisely.
              <br />
              5. For each correct submission, you will be awarded 100 coins.
              <br />
              &nbsp; &nbsp; For each wrong submission, 10 coins will be
              deducted.
              <br />
              &nbsp; &nbsp; You can use the skip option but remember it will
              cost you 20 coins.
              <br />
              6. If you loose all your coins on the first day, then you can come
              again to play on the second day as every player will get a daily
              streak of 50 coins.
              <br />
              7. Use the standard methodology while arranging the code. <br />
              For eg, Variables are declared at the beginning of the function
              definition.
              <br />
              <br />
              GENERAL RULES:
              <br />
              <br />
              1. Any attempt of attack on-site is intolerable. The player will
              be blacklisted and will not be able to participate in any other
              events. <br />
              2. While doing the registration, do remember your password in
              order to login to your account as there is no functionality of
              "forget password".
              <br />
              3. It is advisable to play using laptop, to use all the featured
              effectively.
              <br /> 4. The winners will be announced at the closing ceremony of
              version'21.
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

export default rules;
