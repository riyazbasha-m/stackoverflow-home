import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Banner extends Component {
  render() {
    return (
      <div className={"banner mt-5"}>
        <div>
          <div className="bannerImage">
            <div
              className="w-90"
              style={{ paddingTop: "128px", paddingBottom: "128px" }}
            >
              <h1
                className="text-center"
                style={{
                  fontFamily: "'Roboto Slab Bold',serif",
                  fontSize: "4.23076923rem",
                }}
              >
                We &lt;3 people who code
              </h1>
              <p
                className="text-center mx-auto"
                style={{
                  maxWidth: "32.4102564rem",
                }}
              >
                We build products that empower developers and connect them to
                solutions that enable productivity, growth, and discovery.
              </p>
              <div className="w-90 text-center">
                <Button
                  className={"mr-1"}
                  style={{
                    backgroundColor: "#fff",
                    border: "3px solid orange",
                    color: "orange",
                    fontSize: "12px",
                  }}
                >
                  For Developers
                </Button>
                <Button
                  style={{
                    backgroundColor: "orange",
                    color: "#fff",
                    border: "3px solid orange",
                    fontSize: "12px",
                  }}
                >
                  For business
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
