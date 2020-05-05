import React, { Component } from "react";

export default class Learn extends Component {
  render() {
    return (
      <div className="Learn">
        <div className="text-center">
          <h3>Learn and grow with Stack Overflow</h3>
        </div>
        <br />
        <br />
        <div className="container-fluid Learn-col-2">
          <div className="row">
            <div className="col-lg-3">
              <img
                alt="developer"
                src={require("../assets/images/developer.svg")}
                height={"151px"}
                width={"175px"}
              />
              <h4>Write the script of the future</h4>
              <p>
                Get your coding questions answered to learn, build, and level up
                whether you’re beginning with{" "}
                <span className="Learn-link">JavaScript</span> or a{" "}
                <span className="Learn-link">React</span> professional.
              </p>
            </div>
            <div className="col-lg-3">
              <img
                alt="open-source"
                src={require("../assets/images/open-source.svg")}
                height={"151px"}
                width={"169px"}
              />
              <h4>Support open source</h4>
              <p>
                Reach users of your project by following tags, answering
                newcomer questions, and empowering experts in the community.{" "}
                <span className="Learn-link">
                  Read the curl project creator’s story
                </span>
                .
              </p>
            </div>
            <div className="col-lg-3">
              <img
                alt="advocate"
                src={require("../assets/images/advocate.svg")}
                height={"151px"}
                width={"176px"}
              />
              <h4>Aquire and share knowledge</h4>
              <p>
                Answer questions and{" "}
                <span className="Learn-link">gain insights</span> from an
                audience of developers using your technology on Stack Overflow.
              </p>
            </div>
            <div className="col-lg-3">
              <img
                alt="career-switcher"
                src={require("../assets/images/career-switcher.svg")}
                height={"151px"}
                width={"209px"}
              />
              <h4>Find career opportunities</h4>
              <p>
                Create a profile that shows off your expertise and credentials
                to help you make your next move. Start your{" "}
                <span className="Learn-link">Developer Story</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
