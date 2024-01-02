import React, { useContext, useState } from "react";
import { BsSuitHeartFill, BsSearch, BsCart2, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { storeContext } from "../Context/Context";
import {  FaGripLines } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const globalContext = useContext(storeContext);
  const state = globalContext.state;
  const dispatch = globalContext.dispatch;
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  return (
    <div className="smallScreen0">
      <div className="flex justify-around smallScreen1  p-4">
        <div>
          <p className="font-extrabold">
            {" "}
            <span className="text-pink-500"> My</span>-shop
          </p>
        </div>
        <div className="flex justify-between smallScreen gap-9 text-slate-500 cursor-pointer">
          <p>Home</p>
          <p>Product</p>
          <p>Search</p>
         
        </div>
        <div className="flex justify-between gap-9 text-slate-500 cursor-pointer">
          <Link to="/cart">
            <div className="flex  ">
              <p>
                <BsCart2 />
              </p>
              <p className="">{state.length}</p>
            </div>
          </Link>
          <BsSearch />
        <Link to="/wishlist"><BsSuitHeartFill /></Link>  
        </div>
      </div>

      {/*for small screen */}
      <div >
        <div className="header shadow-md lg:hidden ">
          <p className="font-extrabold">
            {" "}
            <span className="text-pink-500"> My</span>-shop
          </p>
          <Link to="/cart">
          <div className="flex">
   
            <p>
              <BsCart2 />
            </p>
            <p className="">{state.length}</p>
          
          </div>
          </Link>

          <div>
            <Link to='/wishlist'>
            <BsHeartFill className="text-red-600" />
            </Link>
     
          </div>

          <div onClick={handleClick}>{open ? <FaGripLines /> : <p>close</p>}</div>
        </div>
        <div className={!open ? "header2 shadow-sm lg:hidden md:hidden" : 'header3 lg:hidden'}>
        <p>Home</p>
          <p>Product</p>
          <p>Search</p>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
