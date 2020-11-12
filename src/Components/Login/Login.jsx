import React, { Component } from "react";
import { auth, provider, SignInScreen } from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Button } from "@material-ui/core";
import "./Login.css";

class Login extends Component {
  componentDidMount() {
    const container = document.querySelector(".login__container");
    const card = document.querySelector(".login__card");
    const logo = document.querySelector(".login__logo");

    container.addEventListener("mousemove", (e) => {
      console.log(e.pageX, e.pageY);
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";
      logo.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    });
  }

  componentWillUnmount() {
    const container = document.querySelector(".login__container");
    const card = document.querySelector(".login__card");
    const logo = document.querySelector(".login__logo");

    container.removeEventListener("mousemove", (e) => {
      console.log(e.pageX, e.pageY);
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.removeEventListener("mouseenter", (e) => {
      card.style.transition = "none";
      logo.style.transform = "translateZ(200px) rotateZ(-45deg)";
    });
    //Animate Out
    container.removeEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    });
  }

  render() {
    const signIn = () => {
      auth.signInWithPopup(provider).then((result) => console.log(result));
    };
    return (
      <div className="login">
        <div className="login__container">
          <div className="login__card">
            <div className="login__area">
              <div className="login__circle"></div>
              <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
                alt=""
              />
            </div>
            <div className="login__text">
              <h1 className="login__hello">Hello,</h1>
              <div className="login__Ano__Container">
                <h1 className="login__anonymous">Anonymous</h1>
              </div>
              <Button onClick={signIn}>Sign In</Button>
              {/* <SignInScreen /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
