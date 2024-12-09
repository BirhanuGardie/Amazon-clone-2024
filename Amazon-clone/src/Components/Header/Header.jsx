import React from "react";
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader.jsx";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
            {/* logo section */}
            <div className={classes.logo__container}>
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </Link>
          <div className={classes.delivery}>
          <span>
            <SlLocationPin/>
          </span>
          <div>
            <p>Delivered to:</p>
            <span>Ethiopia</span>
            </div>
          </div>
          </div>
       
        <div className={classes.search}>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text"name="" id="" placeholder="search product"/>
            <BsSearch size={25} />
        </div>
        <div className={classes.order__container}>
            <Link to="" className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                <select name ="" id ="">
                    <option value="">EN</option>
                </select>
                </Link>
            <Link to="">
                    <p>Sign In</p>
                    <span>Account and lists</span>
                           </Link>
            <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
            </Link>
            <Link to ="/cart" className={classes.cart}>
           <BiCart size ={35}/>
            <span>0</span>
            </Link>
           
        </div>
        </div> 
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
