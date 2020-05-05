import React, { Component } from "react";

export default class Hire extends Component {
  render() {
    return (
      <div className="Hire">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 Hire-col-1">
              <img
                alt="candidate"
                src={require("../assets/images/find-candidate.svg")}
                height={"76px"}
                width={"76px"}
              />
              <h4>Hire your technical talent</h4>
              <p>
                We help expand your technical hiring strategy to promote your
                employer brand and highlight relevant open roles to our
                community of 50 million monthly visitors.
              </p>
              <button>Stack Overflow Talent</button>
            </div>
            <div className="col-lg-6 Hire-col-1">
              <img
                alt="accelerate"
                src={require("../assets/images/accelerate.svg")}
                height={"76px"}
                width={"76px"}
              />
              <h4>Reach developers worldwide</h4>
              <p>
                Use the world’s largest resource for people who code to help you
                increase awareness and showcase your product or service across
                Stack Overflow’s network of Q&A sites.
              </p>
              <button>Stack Overflow Advertising</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
