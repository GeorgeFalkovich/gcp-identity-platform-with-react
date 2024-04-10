import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "put-api-key-here",
    authDomain: "georgef-sandbox.firebaseapp.com",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app, {
    /* extra options */
  });

  const onButtonClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        props.setUser(user.user.email);
        props.setLoggedIn(true);
        navigate("/todo");
      })
      .catch((err) => {
        setError("The email address or password is incorrect");
      });
  };

  return (
    <div className={"mainContainer"}>
      {error ? <p className="login-error">{error}</p> : null}
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default Login;
