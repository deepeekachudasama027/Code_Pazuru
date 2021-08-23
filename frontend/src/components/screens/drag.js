import React, { Component } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faCoins } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import arrayMove from "./arrayMove";
import axios from "axios";

require("./navbar.css");
require("./preloader.css");

//Drag handler
const DragHandle = sortableHandle(() => (
  <span className={styles.dragHandler}>
    <FontAwesomeIcon icon={faSort} />
  </span>
));

//Draggable elements
const SortableItem = sortableElement(({ value }) => (
  <div className={styles.dragElement}>
    <p className={styles.Element}> {value}</p>
    <DragHandle />
  </div>
));

//Drag area
const SortableContainer = sortableContainer(({ children }) => {
  return <div className={styles.dragContainer}>{children}</div>;
});

class SortableItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "",
      items: [],
      score: 0,
      username: "",
    };
    this.check = this.check.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.skip = this.skip.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const GetCode = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      try {
        const element = await axios.post("/api/auth/getCode", config);

        if (element.data === "login required") {
          this.logoutHandler();
        } else if (element.data === "Game Over") {
          window.location.href = "./thank_you";
        } else {
          this.setState({
            level: element.data.element.level,
            items: element.data.element.code,
            username: element.data.username,
            score: element.data.score,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    GetCode();
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  check() {
    const check_code = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const items = this.state.items;
      try {
        const element = await axios.post("/api/auth/check", { items }, config);

        if (element.data === "login required") {
          this.logoutHandler();
        } else if (element.data === "Game Over") {
          window.location.href = "./thank_you";
        } else {
          this.setState({
            level: element.data.element.level,
            items: element.data.element.code,
            username: element.data.username,
            score: element.data.score,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    check_code();
  }

  skip() {
    const skip_ques = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const items = this.state.items;
      try {
        const element = await axios.post("/api/auth/skip", { items }, config);
        if (element.data === "login required") {
          this.logoutHandler();
        } else if (element.data === "Game Over") {
          window.location.href = "./thank_you";
        } else {
          this.setState({
            level: element.data.element.level,
            items: element.data.element.code,
            username: element.data.username,
            score: element.data.score,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    skip_ques();
  }
  logoutHandler() {
    localStorage.removeItem("authToken");
    window.location.href = "./login";
  }

  render() {
    const { items, level, score, username } = this.state;
    if (this.state.level === "") {
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
          <nav className="nav">
            <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
            <label htmlFor="nav__checkbox" className="nav__toggle">
              <svg className="menu" viewBox="0 0 448 512" width="100" title="bars">
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
          <div id="subnav">
            <span id="level"> Level : {level} </span>
            <span id="score">
              {" "}
              <FontAwesomeIcon
                icon={faCoins}
                style={{ color: "yellow", fontSize: "xx-large" }}
              />{" "}
              {score}{" "}
            </span>
          </div>

          <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
            {items.map((value, index) => (
              <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
          </SortableContainer>
          <center>
            <button
              onClick={this.skip}
              id="skip"
              className="btn btn-large wa ves-effect waves-light hoverable blue accent-3"
            >
              Skip
            </button>
            <button
              onClick={this.check}
              id="submit"
              className="btn btn-large wa ves-effect waves-light hoverable blue accent-3"
            >
              Submit
            </button>
          </center>
        </div>
      );
    }
  }
}

export default SortableItems;
