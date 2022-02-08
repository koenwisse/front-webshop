import React from "react";
import "./styles.css";
import NavBarItem from "./NavBarItem";
import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

// import { CgProfile } from "@react-icons/all-files/fa/CgProfile";

export default function NavBar() {
  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search.."
          style={{
            width: "15rem",
            background: "#F2F1F9",
            border: "none",
            padding: "0.5rem",
            marginTop: "0.6rem",
          }}
        />
      </div>
      <div className="link-container">
        <NavBarItem path="/" linkText="HOME"></NavBarItem>
        <NavBarItem path="/products" linkText="PRODUCTS"></NavBarItem>
        <NavBarItem path="/blog" linkText="BLOG"></NavBarItem>
        <NavBarItem path="/shop" linkText="SHOP"></NavBarItem>
        <NavBarItem path="/contact" linkText="CONTACT"></NavBarItem>
      </div>
      <div className="icons-container">
        <CgProfile />
        <AiOutlineShoppingCart />
        <AiOutlineHeart />
      </div>
    </div>
  );
}
