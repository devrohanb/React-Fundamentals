import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("The updated count value is : ", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <h2>Count - {this.state.count}</h2>
        <button onClick={() => this.increment()}>Increment </button>
      </div>
    );
  }
}

export default Counter;
