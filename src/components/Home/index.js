import React from "react";
import Card from "../CardInfo";

const Home = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Card />
    </div>
  );
};

export default Home;
