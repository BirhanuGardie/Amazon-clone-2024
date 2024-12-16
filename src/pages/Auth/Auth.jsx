import React from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__signInButton}>Sign In</button>

        </form>
        <p>
          By signing-in you agree to the Amazon fake clone conditions of use & sale.
           please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

        </p>
        <button className={classes.login__registerButton}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
