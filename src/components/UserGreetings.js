import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // TODO: IF/Else Approach :
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Rohan</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    //TODO: Element Variable Approach :
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Rohan</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    //TODO: Using Ternary Operator Approach:
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Rohan</div>
    // ) : (
    //   <div>Welcome Guest </div>
    // );

    //TODO: Using Short Circuit Operator :
    // This operator is used to either Render something or nothing case.
    return this.state.isLoggedIn && <div>Welcome Rohan</div>;
  }
  //     return (
  //       <div>
  //         <div>Welcome Rohan</div>
  //         <div>Welcome Guest</div>
  //       </div>
  //     );
  //   }
}

export default UserGreetings;
