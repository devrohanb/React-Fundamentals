import React from "react";

// function Greet() {
//   return <h2> Hello Rohan !</h2>;
// }

const Greet = (props) => {
  console.log(props);
  return (
    <h2>
      Hello {props.name}! you are the : {props.heroName}
    </h2>
  );
};

export default Greet;
