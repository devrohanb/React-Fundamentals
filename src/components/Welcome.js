import React, { Component } from "react";

class Welcome extends Component {
  render() {
    // TODO: Props destructuring :
    const { name, heroName } = this.props;
    // TODO: State destruring :
    //const {state1, state2} = this.state;

    return (
      <h2>
        Welcome {name} a.k.a {heroName}
      </h2>
    );
  }
}

export default Welcome;
