import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import image from "./nit.png";
import image1 from "./version_logo.png";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      header: {
        "Content-Type": "application/json",
      },
      id: userinfo,
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      const userinfo = localStorage.getItem("userInfo");
      if (userinfo) {
        history.push("/");
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
      <div className="register-screen">
        <div id="img1">
          <img id="img11_1" src={image} alt="fireSpot" />
        </div>
        <form onSubmit={registerHandler} className="register-screen__form">
          <h3 className="register-screen__title">REGISTER</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                required
                id="name"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                required
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                required
                id="confirmpassword"
                autoComplete="true"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="button">
              <button type="submit" className="btn btn-primary" id="btn">
                Register
              </button>
            </div>
          </div>

          <span className="register-screen__subtext">
            Already have an account?{" "}
            <Link style={{ color: "aqua" }} to="/login">
              Login
            </Link>
          </span>
        </form>
        <div id="img2">
          <img id="img22_1" src={image1} alt="fireSpot" />
        </div>
      </div>
      <div>
        <footer className="footer">&copy; Developed by EEC(Version'21)</footer>
      </div>
    </div>
  );
};

export default RegisterScreen;
