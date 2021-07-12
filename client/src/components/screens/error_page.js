import React, { Component } from "react";
import axios from "axios";

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
          <center>
   <h1>Loading</h1>
          </center>
       )}
        else {
      return (
        <div class="maincontainer">
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
          <h1>  OOPs {username}! </h1>
          Seems like you landing on wrong Page  <br/>
          Here nothing to see! <br/>
          let's Go back! Press the button
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
  