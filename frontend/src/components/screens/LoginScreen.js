import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import image from "./nit.png";
import image1 from "./version_logo.png";
const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      const userinfo = localStorage.getItem("userInfo");
      if (userinfo) {
        history.push("/game");
      }
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="login-screen">
        <div id="img1">
          <img id="img1_1" src={image} alt="fireSpot" />
        </div>
        <form onSubmit={loginHandler} className="login-screen__form">
          <h3 className="login-screen__title">LOGIN</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form">
            <div className="form-group">
              <input
                type="email"
                required
                id="inputbox"
                placeholder="Email"
                autoComplete="true"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                required
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
            </div>
            <div className="button">
              <button type="submit" className="btn btn-primary" id="btn">
                Login
              </button>
            </div>
          </div>

          <span className="login-screen__subtext">
            Don't have an account?{" "}
            <Link style={{ color: "aqua" }} to="/register">
              Register
            </Link>
          </span>
        </form>
        <div id="img2">
          <img id="img2_1" src={image1} alt="fireSpot" />
        </div>
      </div>
      <div>
        <footer className="footer">&copy; Developed by EEC(Version'21)</footer>
      </div>
    </div>
  );
};

export default LoginScreen;
