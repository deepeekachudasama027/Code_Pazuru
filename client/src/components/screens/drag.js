import React, { Component } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import arrayMove from "./arrayMove";
import axios from "axios";
require("./navbar.css");

//Drag handler
const DragHandle = sortableHandle(() => (
  <span className={styles.dragHandler}>
    <FontAwesomeIcon icon={faBars} />
  </span>
));

//Draggable elements
const SortableItem = sortableElement(({ value }) => (
  <div className={styles.dragElement}>
    {value}
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

        console.log(element);
        this.setState({
          level: element.data.element.level,
          items: element.data.element.code,
          username: element.data.username,
          score: element.data.score,
        });
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

        this.setState({
          level: element.data.element.level,
          items: element.data.element.code,
          username: element.data.username,
          score: element.data.score,
        });
      } catch (err) {
        console.log(err);
      }
    };

    check_code();
  }
  logoutHandler() {
    localStorage.removeItem("authToken");
    window.location.href = "./login";
  }
  render() {
    const { items, level, score, username } = this.state;

    return (
      <div>
        <nav className="navbar">
          <div className="logo">
            <a href="/drag" class="navbar-brand animated flip">
              Web Pazuru{" "}
            </a>
          </div>
          <a href="/drag" class="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navbar-links">
            <ul>
              <li>
                <h1 id="roll">{username}</h1>
              </li>
              <li>
                <a href="/drag">Rules</a>
              </li>

              <li>
                <button onClick={this.logoutHandler}>logout</button>
              </li>
            </ul>
          </div>
        </nav>
        <div></div>
        <center>
          <p> Level : {level} </p>
          <p> Score:{score} </p>
        </center>

        <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
          {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
          ))}
        </SortableContainer>
        <center>
          <button
            onClick={this.check}
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              color: "white",
              background: "black",
            }}
            className="btn btn-large wa ves-effect waves-light hoverable blue accent-3"
          >
            submit
          </button>
        </center>
      </div>
    );
  }
}

export default SortableItems;
