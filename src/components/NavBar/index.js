import React from "react";
import "./styles.css";
import NavBarItem from "./NavBarItem";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

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
    </div>
  );
}
