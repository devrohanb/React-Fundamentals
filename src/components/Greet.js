import React from "react";

// function Greet() {
//   return <h2> Hello Rohan !</h2>;
// }

const Greet = (props) => {
  const { name, heroName } = props; // Destructuring of the object in Javascript (Here destructring of Props)
  return (
    <h2>
      Hello {name}! you are the : {heroName}
    </h2>
  );
};

export default Greet;
