import React from "react";
import card from "../card";

const Home = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <card />
    </div>
  );
};

export default Home;
