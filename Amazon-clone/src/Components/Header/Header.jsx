import React from "react";
import classes from './Header.module.css'
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
          <a href="#">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </a>
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
            <a href="" className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                <select name ="" id ="">
                    <option value="">EN</option>
                </select>
                </a>
            <a href="">
                    <p>Sign In</p>
                    <span>Account and lists</span>
                           </a>
            <a href="">
                <p>returns</p>
                <span>& Orders</span>
            </a>
            <a href ="" className={classes.cart}>
           <BiCart size ={35}/>
            <span>0</span>
            </a>
           
        </div>
        </div> 
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
