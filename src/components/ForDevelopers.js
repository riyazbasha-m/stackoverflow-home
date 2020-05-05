import React, { Component } from "react";

export default class ForDevelopers extends Component {
  render() {
    return (
      <div className="ForDev">
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
                  Stack Overflow is an
                  <span style={{ color: "orange" }}> open community</span> for
                  anyone that codes. We help you get answers to your toughest
                  coding questions, share knowledge with your coworkers in
                  private, and find your next dream job.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row ">
              <div className="container">
                <div className="row text-center">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 mb-3">
                    <div className="ForDev-bar card">
                      <div className="w-90">
                        <img
                          alt="public"
                          src={require("../assets/images/public-qa.svg")}
                          height={"78px"}
                          width={"118px"}
                        />
                      </div>

                      <h4 className="mt-3">Public Q&A</h4>
                      <p>
                        Get answers to more than 16.5 million questions and give
                        back by sharing your knowledge with others. Sign up for
                        an account.
                      </p>
                      <div className="w-100">
                        <button id="btn2" style={{ width: "80%" }}>
                          Browse questions
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="ForDev-bar card">
                      <div className="w-90">
                        <img
                          alt="private"
                          src={require("../assets/images/private-qa.svg")}
                          height={"78px"}
                          width={"118px"}
                        />
                      </div>

                      <h4 className="mt-3">Private Q&A</h4>
                      <p>
                        Level up with Stack Overflow while you work. Share
                        knowledge privately with your coworkers using our
                        flagship Q&A engine.
                      </p>
                      <div className="w-100">
                        <button id="btn1">Try for free</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
                    <div className="ForDev-bar card">
                      <div className="w-90">
                        <img
                          alt="jobs"
                          src={require("../assets/images/jobs.svg")}
                          height={"78px"}
                          width={"118px"}
                        />
                      </div>

                      <h4 className="mt-3">Browse jobs</h4>
                      <p>
                        Find the right job through high quality listings and
                        search for roles based on title, technology stack,
                        salary, location, and more.
                      </p>
                      <div className="w-100">
                        <button id="btn2">Find a job</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
