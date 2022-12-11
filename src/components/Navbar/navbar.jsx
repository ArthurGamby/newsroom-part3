import React from "react";
import { StyledNavBar } from "./navbar.styles";

function Navbar(props) {
  return (
    <StyledNavBar>
      <div className="nav-items">
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="/">Tesla</a>
        </span>
        <span>
          <a href="/">Apple</a>
        </span>
        <span>
          <a href="/">Tech</a>
        </span>
        <span>
          <a href="/">Markets</a>
        </span>
        <span>
          <a href="/">Sports</a>
        </span>
        <span>
          <a href="/">WTF</a>
        </span>
      </div>
    </StyledNavBar>
  );
}

export default Navbar;
