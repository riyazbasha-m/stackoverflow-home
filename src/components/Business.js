import React, { Component } from "react";

export default class Business extends Component {
  render() {
    return (
      <div className="Business">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-12 Business-col-1"
              style={{ textAlign: "center" }}
            >
              <h2>For business, by developers</h2>
              <hr />
              <p>
                Our mission is to help developers write the script of the
                future. This means helping you find and hire skilled developers
                for your business and providing them the tools they need to
                share knowledge and work effectively.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="row ">
            <div
              className={
                "col-lg-3 col-md-6 col-sm-12 col-xs-12 card p-3 ml-5 mt-4 mr-5"
              }
            >
              <div className="row Business-col-3">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 text-center">
                  <img
                    alt="questions"
                    src={require("../assets/images/private-questions.svg")}
                    height={"76px"}
                    width={"76px"}
                  />
                </div>
                <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12 text-justify">
                  <p style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                    Quickly find and share internal knowledge with Private Q&A
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "col-lg-3 col-md-6 col-sm-12 col-xs-12 card ml-5 mt-4 mr-5"
              }
              style={{ padding: "11px 11px 0px 11px" }}
            >
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
                  <img
                    alt="candidate"
                    src={require("../assets/images/find-candidate.svg")}
                    height={"76px"}
                    width={"76px"}
                  />
                </div>
                <div className="col-lg-9  col-md-6 col-sm-6 col-xs-6 text-justify">
                  <p style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                    Find the perfect candidate for your growing technical team
                    with Talent solutions
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "col-lg-3 col-md-6  col-sm-12 col-xs-12 card pr-3 pl-3 pt-2 mt-4 ml-5 mr-5"
              }
            >
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 text-center">
                  <img
                    alt="accelerate"
                    src={require("../assets/images/accelerate.svg")}
                    height={"76px"}
                    width={"76px"}
                  />
                </div>
                <div className="col-lg-9  col-md-6 col-sm-6 col-xs-6 text-justify">
                  <p style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                    Accelerate the discovery of your products or services
                    through our Advertising platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
