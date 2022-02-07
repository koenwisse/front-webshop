import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function NavBarItem(props) {
  return (
    <div>
      <Nav.Link
        as={NavLink}
        to={props.path}
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      >
        {props.linkText}
      </Nav.Link>
    </div>
  );
}
