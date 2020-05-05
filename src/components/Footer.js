import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container-fluid Footer-bg">
          <div className="row">
            <div className="col-lg-1 Footer-col-1">
              <img
                alt="logo"
                src={require("../assets/images/logo-stack.webp")}
                height={"37px"}
                width={"32px"}
              />
            </div>
            <div className="col-lg-2 Footer-col-2">
              <ul>
                <li
                  style={{
                    textDecoration: "none solid rgb(242,243,243)",
                    color: "#f2f3f3",
                  }}
                >
                  STACK OVERFLOW
                </li>
                <br />
                <li>Questions</li>
                <li>Jobs</li>
                <li>Developer Jobs Directory</li>
                <li>Salary Calculator</li>
                <li>Help</li>
                <li>Mobile</li>
                <li>Disable Responsiveness</li>
              </ul>
            </div>
            <div className="col-lg-2 Footer-col-2">
              <ul>
                <li
                  style={{
                    textDecoration: "none solid rgb(242,243,243)",
                    color: "#f2f3f3",
                  }}
                >
                  PRODUCTS
                </li>
                <br />
                <li>Teams</li>
                <li>Talent</li>
                <li>Advertising</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div className="col-lg-2 Footer-col-2">
              <ul>
                <li
                  style={{
                    textDecoration: "none solid rgb(242,243,243)",
                    color: "#f2f3f3",
                  }}
                >
                  COMPANY
                </li>
                <br />
                <li>About</li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-lg-2 Footer-col-2">
              <ul>
                <li
                  style={{
                    textDecoration: "none solid rgb(242,243,243)",
                    color: "#f2f3f3",
                  }}
                >
                  STACK EXCHANGE NETWORK
                </li>
                <br />
                <li>Technology</li>
                <li>Life/Arts</li>
                <li>Culture/Recreation</li>
                <li>Science</li>
                <li>Other</li>
              </ul>
            </div>
            <div className="col-lg-3 text-center Footer-col-3">
              <br />
              <div>
                <span>Blog</span>&nbsp;&nbsp;&nbsp;
                <span>Facebook</span>&nbsp;&nbsp;&nbsp;
                <span>Twitter</span>&nbsp;&nbsp;&nbsp;
                <span>LinkedIn</span>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div>
                <p>
                  site design / logo © 2020 Stack Exchange Inc; user
                  contributions licensed under cc by-sa 4.0 with attribution
                  required. rev 2020.5.1.36728
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
