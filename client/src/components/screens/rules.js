import React, { Component } from "react";
import axios from "axios";
require("./preloader.css")
require("./navbar.css")
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
          if(element.data==="login required")
        {
          this.logoutHandler()
        }
        else {
         
          this.setState({
            username: element.data.username,
    
          });}
        } catch (err) {
          console.log(err);
        }
      };
  
      GetDetails();
    }
   
  logoutHandler () {
      localStorage.removeItem("authToken");
      window.location.href = "./login";
    }
  
    render() {
      const {  username } = this.state;
        if(this.state.username===""){return (
          <div id="loader-wrapper">
          <div id="loader"></div>
    
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
       )}
        else {
      return (
        <div class="backgroundset">
            <nav class="navbar">
      <div class="logo">
        <a href="/drag" class="navbar-brand animated flip">Web Pazuru </a>
      </div>
      <a href="/drag" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
     
          <li><button onClick={this.logoutHandler}>logout</button></li>
        </ul>
      </div>
    </nav>
    <div>
          <h1>  rules, {username}! </h1>
        
          <br/>
          <a
            href="/drag"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              color: "white",
              background: "black",
            }}
            className="btn btn-large wa ves-effect waves-light hoverable blue accent-3"
          >
            Play
          </a>

             </div>
         </div>
        
      
      );
    }
  }}
  
  export default error_page;
  