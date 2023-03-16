import { useState } from "react";
import "./form.css";
import LoginForm from "./local componenets/loginForm";
import SignInForm from "./local componenets/signinForm";

export default function FormUi() {
  let [LoggedIn, setLoggedIn] = useState(false);

  function HandleLogin() {
    setLoggedIn(!LoggedIn);
  }

  return (
    <div className="FormContainer">
      <h1>Welcome!</h1>
      <p id="welcomeTag">Log in your account</p>
      {LoggedIn ? <LoginForm /> : <SignInForm />}
      <hr />
      <div className="footerBox">
        <div className="socialLogin">
          <div id="googleLoginBtn">
            <img src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png" />
            Continue with Google
          </div>
          <div id="FbLoginBtn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
            Continue with Facebook
          </div>
        </div>
        <div id="switchAcc">
          {LoggedIn ? "Don't have any account?" : "Already have an account?"}
          <a href="#" onClick={HandleLogin}>
            {LoggedIn ? " Sign Up" : " Login"}
          </a>
        </div>
      </div>
    </div>
  );
}
