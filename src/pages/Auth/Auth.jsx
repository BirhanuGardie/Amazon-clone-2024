import React, { useState, useContext } from "react";
import classes from "./signUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from 'firebase/auth'
import {ClipLoader} from 'react-spinners'
import { DataContext } from "../../Components/DataProvider/DataProvider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading]= useState({
    signIn:false,
    signUp:false

  })


  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate();
  const navStateData = useLocation()
 
 
  const authHandler =async(e)=>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name == "signin"){

// firebase auth
setLoading({...loading, signIn:true})

signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
  
  dispatch({
    type:Type.SET_USER,
    user:userInfo.user
  })
  setLoading({...loading, signIn:false})
  navigate(navStateData?.state?.redirect || "/");
}).catch((err)=>{
  setError(err.message);
  setLoading({...loading, signIn:false})
})


    }
    else{
      setLoading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email,password).then((userInfo)=>{
      
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
        setLoading({...loading, signUp:false})
        navigate(navStateData?.state?.redirect || "/");
      }).catch((err)=>{
        setError(err.message);
        setLoading({...loading, signUp:false})
      })

    }
  }

  return (
    <section className={classes.login}>
      <Link to ={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small 
          style={{
            padding:"5px",
            textAlign:"center",
            color:"red",
            fontWeight:"bold",
          }}
          >
            {navStateData?.state?.msg}

          </small>

        ) }
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button type="submit" onClick={authHandler} name="signin" className={classes.login__signInButton}>
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
           </button>
        </form>
        <p>
          By signing-in you agree to the Amazon fake clone conditions of use &
          sale. please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button type="submit" onClick={authHandler} name="signup" className={classes.login__registerButton}>
        {loading.signUp ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Create your Amazon Account"
            )}
          
        </button>
        {
          error && <small style={{paddingTop:"5px",color:"red"}}>{error} </small>
        }
      </div>
    </section>
  );
}

export default Auth;
