import React from "react";
import logo from "../assets/svg/dog-puppy.svg";

const styles = {
  padding: "20px 0",
  textAlign: "center"
};

function Header() {
  return (
    <div className="navbar" style={styles}>
      <h1>
        AdoptMe
        <span>
          <img style={{ width: "25px" }} src={logo}></img>
        </span>
      </h1>
    </div>
  );
}

export default Header;
