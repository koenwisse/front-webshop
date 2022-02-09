import React from "react";
import "./styles.css";
import NavBarItem from "./NavBarItem";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    // CONTAINER
    <div className="container">
      {/* INPUT */}
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
      {/* LINKS */}
      <div className="link-container">
        <NavBarItem path="/" linkText="HOME"></NavBarItem>
        <NavBarItem path="/products" linkText="PRODUCTS"></NavBarItem>
        <NavBarItem path="/blog" linkText="BLOG"></NavBarItem>
        <NavBarItem path="/shop" linkText="SHOP"></NavBarItem>
        <NavBarItem path="/contact" linkText="CONTACT"></NavBarItem>
      </div>
      {/* ICONS */}
      <div className="icons-container">
        <NavItem>
          <Link to="/profile">
            <CgProfile />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/favourites">
            <AiOutlineHeart />
          </Link>
        </NavItem>
      </div>
    </div>
  );
}
