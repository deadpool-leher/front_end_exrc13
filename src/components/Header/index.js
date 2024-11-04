import React from "react";
import Generations from "../Generations";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Generations />
    </div>
  );
};

export default Header;
