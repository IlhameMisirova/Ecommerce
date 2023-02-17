import React from "react";
import "../App.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import mac from "../images/mac_icon.gif";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";
import { entryData } from "../store/reducer/cartSlice";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const entryName = useSelector((state) => state.cart.entryName);
  const dispatch = useDispatch();
  return (
    <div className="nav_main">
      <div className="nav">
        <div className="nav_img">
          <Link to={"/"}>
            <img src={mac} alt="" />
          </Link>
        </div>

        <div className="icons">
          {entryName === "" ? 
            <Link to={"/signin"}>
              <PersonOutlineIcon sx={{ fontSize: 35 }} className="icon" />
            </Link>
          : 
            <div
              className="name"
              onClick={() => {
                dispatch(entryData(""));
              }}
            >
              {entryName}
            </div>
          }
          <Link to={"/bag"}>
            <ShoppingBagIcon sx={{ fontSize: 35 }} className="icon" />{" "}
            <span className="quantity">{totalQuantity}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
