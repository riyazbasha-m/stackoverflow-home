import React, { Component } from "react";

export default class Questions extends Component {
  render() {
    return (
      <div className="questions mt-5 mb-5">
        <h2 className="text-center">
          Questions are everywhere, answers are on Stack Overflow
        </h2>

        <div
          className="w-90"
          style={{ paddingTop: "128px", paddingBottom: "50px" }}
        >
          <h4 className="text-center m-auto" style={{ width: "50%" }}>
            Accept the answer which solved your problem to let others benefit
            from the valuable information.
          </h4>
        </div>
        <div className="text-center">
          <a
            style={{ backgroundColor: "orange", color: "#fff" }}
            className="pl-3 pr-3 pt-2 pb-2"
          >
            Create a account
          </a>
        </div>
      </div>
    );
  }
}
