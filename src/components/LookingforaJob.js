import React, { Component } from "react";

export default class LookingforaJob extends Component {
  render() {
    return (
      <div className="job container-fluid">
        <div className="row">
          <div className="col-lg-12 Job-title">
            <h3 className="ml-4 bold">Looking for a job?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 card ml-2 mr-2">
            <div className="row">
              <div className="col-lg-3">
                <img
                  alt="jobs-tech"
                  src={require("../assets/images/jobs-tech.svg")}
                  height={"50px"}
                  width={"50px"}
                />
              </div>
              <div className="col-lg-8 ml-2 mt-2">
                <p className="bold">Browse jobs by technology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 card ml-4 mr-2">
            <div className="row">
              <div className="col-lg-3">
                <img
                  alt="jobs-salary"
                  src={require("../assets/images/jobs-salary.svg")}
                  height={"50px"}
                  width={"50px"}
                />
              </div>
              <div className="col-lg-8 ml-2 mt-2">
                <p className="bold">Browse jobs by salary</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 card ml-4 mr-2">
            <div className="row">
              <div className="col-lg-3">
                <img
                  alt="jobs-visa"
                  src={require("../assets/images/jobs-visa.svg")}
                  height={"50px"}
                  width={"50px"}
                />
              </div>
              <div className="col-lg-8 ml-2 mt-2">
                <p className="bold">Browse jobs by visa sponsorship</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 card ml-4 mr-2">
            <div className="row">
              <div className="col-lg-3">
                <img
                  alt="jobs-remote"
                  src={require("../assets/images/jobs-remote.svg")}
                  height={"50px"}
                  width={"50px"}
                />
              </div>
              <div className="col-lg-8 ml-2 mt-2">
                <p className="bold">Browse remote-friendly jobs</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 mt-2 ml-4 mr-2">
            <div className="card backgroundColor text-center">
              <p className="mt-2">View all jobs</p>
            </div>
          </div>
        </div>
        <div
          style={{
            float: "right",
            position: "relative",
            top: "57px",
            right: "30px",
          }}
        >
          <img
            alt="robot"
            src={require("../assets/images/robot.svg")}
            width="70"
          ></img>
        </div>
      </div>
    );
  }
}
