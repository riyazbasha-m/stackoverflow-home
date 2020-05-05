import React, { Component } from "react";
import CheckIcon from "@material-ui/icons/Check";

export default class Unlock extends Component {
  render() {
    return (
      <div className="unlock container-fluid">
        <div
          className="w-90"
          style={{ paddingTop: "128px", paddingBottom: "128px" }}
        >
          <h1
            className="text-center mx-auto"
            style={{
              fontFamily: "'Roboto Slab Bold',serif",
              fontSize: "2.23076923rem",
              maxWidth: "40.5128205rem",
            }}
          >
            Unlock siloed knowledge with Stack Overflow for Teams
          </h1>
          <p
            className="text-center mx-auto mt-5"
            style={{ maxWidth: "32.4102564rem" }}
          >
            Wikis, chat messages, or formal documentation for knowledge
            management aren’t effective. Our question and answer format is a
            proven approach for accessing the right information in less time.
          </p>
          <p className="text-center mt-4 mx-auto">
            <a style={{ backgroundColor: "orange", padding: "6px 6px" }}>
              Learn more
            </a>
          </p>
          <div className="row mt-5">
            <div className="col-lg-4 card1" style={{ marginTop: "110px" }}>
              <div className="card m-3">
                <div className="card-header text-center">
                  <h3 style={{ color: "#27348b" }}>Basic</h3>
                  <p>Private knowledge base for teams</p>
                </div>
                <div className="card-body">
                  <div style={{ display: "flex" }}>
                    <p style={{ fontSize: "2.61538461rem" }}>$5</p>
                    <p className="w-50 mt-3" style={{ fontSize: "13px" }}>
                      per teammate / month billed annually
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Free until June 30</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">
                      Your own private space hosted on stackoverflow.com
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Fully searchable archive</p>
                  </div>

                  <div className="text-center">
                    <p
                      className="pt-2 pb-2"
                      style={{ backgroundColor: "#dee1e3" }}
                    >
                      Get started for free
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card2 mt-4">
              <div className="card m-3">
                <div className="card-header text-center">
                  <h3 style={{ color: "#27348b" }}>Business</h3>
                  <p>Private knowledge base with SSO and premium features</p>
                </div>
                <div className="card-body">
                  <div style={{ display: "flex" }}>
                    <p style={{ fontSize: "2.61538461rem" }}>$12</p>
                    <p className="w-50 mt-3" style={{ fontSize: "13px" }}>
                      per teammate / month billed annually
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">All the features of Basic</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Single sign-on (SSO) with SAML</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Reporting and analytics</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Priority customer support</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">99.5% uptime</p>
                  </div>

                  <div className="text-center">
                    <p
                      className="pt-2 pb-2"
                      style={{ backgroundColor: "#dee1e3" }}
                    >
                      Request a demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card3">
              <div className="card m-3">
                <div className="card-header text-center">
                  <h3>Enterprise</h3>
                  <p>
                    Standalone knowledge base with enhanced security and
                    flexible hosting
                  </p>
                </div>
                <div className="card-body">
                  <div style={{ display: "flex" }}>
                    <h4 className="ml-3 mb-3">Custom pricing</h4>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">
                      Host on your cloud or servers – or our private managed
                      cloud
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Single sign-on with AD or SAML</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">Robust read and write API</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">
                      Your own customer success and community building
                      representative
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="pl-2">
                      99.5% uptime SLA and priority support
                    </p>
                  </div>

                  <div className="text-center mt-3">
                    <p
                      className="pt-2 pb-2"
                      style={{ backgroundColor: "#F1AB00" }}
                    >
                      Request a demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "70px",
          }}
        >
          <div style={{ display: "flex", margin: "20px" }}>
            <img alt="G2" src={require("../assets/images/G2.svg")}></img>
            <p className="ml-2 mt-1">
              <span style={{ fontWeight: "bold" }}>Leader</span> Fall 2019
            </p>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <img alt="G2" src={require("../assets/images/G2.svg")}></img>
            <p className="ml-2 mt-1">
              <span style={{ fontWeight: "bold" }}>Users Love Us</span>
            </p>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <img
              alt="fastco"
              src={require("../assets/images/fastco.svg")}
            ></img>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <p className="ml-2 mt-1">
              <span style={{ fontWeight: "bold" }}>
                Most Innovative Companies 2019
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
