import React, { Component } from "react";
// import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Learn from "./Learn";
import Hire from "./Hire";
import Business from "./Business";
import LookingforaJob from "./LookingforaJob";
import Table from "./Table";
import ForDevelopers from "./ForDevelopers";
import Unlock from "./Unlock";
import Questions from "./Questions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Form from "react-bootstrap/Form";
import SearchIcon from "@material-ui/icons/Search";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <AppBar
            className="header-desktop"
            position="fixed"
            style={{
              backgroundColor: "#ebebed",
              borderTop: "4px solid orange",
              height: "65px",
            }}
          >
            <Toolbar>
              <IconButton edge="start" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="p" className={"headerText mr-1 ml-1"}>
                <img
                  alt="logo"
                  src={require("../assets/images/logo-stack.webp")}
                  height="40px"
                ></img>
                <span>
                  Stack <b>overflow</b>
                </span>
              </Typography>
              <Typography
                variant="p"
                className={"headerText selectedField mr-1 ml-1"}
              >
                Products
              </Typography>
              <Typography variant="p" className={"headerText  mr-1 ml-1"}>
                Customers
              </Typography>
              <Typography variant="p" className={"headerText  mr-1 ml-1"}>
                Use Cases
              </Typography>
              <SearchIcon className={"searchIcon"} />
              <Form.Group
                controlId="formBasicEmail"
                style={{ width: "560px", marginTop: "15px" }}
              >
                <Form.Control
                  type="email"
                  className="searchForm"
                  placeholder="Search"
                />
              </Form.Group>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#e1ecf4",
                  color: "#5788ad",
                  borderColor: "#5788ad",
                }}
                className={"signUpButton mr-1 ml-2"}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#0095ff",
                  color: "#fff",
                  borderColor: "#5788ad",
                }}
                className={"mr-1 ml-1"}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>

          <AppBar
            className="header-mobile"
            position="fixed"
            style={{
              backgroundColor: "#ebebed",
              borderTop: "4px solid orange",
              height: "65px",
            }}
          >
            <Toolbar>
              <IconButton edge="start" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={"headerText mr-1 ml-1 "}>
                <img
                  alt="logo"
                  src={require("../assets/images/logo-stack.webp")}
                  height="40px"
                ></img>
              </Typography>
              <Typography
                variant="p"
                className={"headerText selectedField mr-1 ml-1 pl-1 pr-1"}
              >
                Products
              </Typography>
              <SearchIcon style={{ color: "grey" }} />
              <div style={{ float: "right" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#0095ff",
                    color: "#fff",
                    borderColor: "#5788ad",
                  }}
                  className={"mr-1 ml-1"}
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#e1ecf4",
                    color: "#5788ad",
                    borderColor: "#5788ad",
                  }}
                  className={"signUpButton mr-1 ml-2"}
                >
                  Sign Up
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <section id="banner">
          <Banner />
        </section>
        <section id="ForDevelopers"></section>
        <ForDevelopers />
        <section id="Business"></section>
        <Business />
        <section id="Unlock"></section>
        <Unlock />
        <section id="Table"></section>
        <Table />
        <section id="Hire"></section>
        <Hire />
        <section id="Questions"></section>
        <Questions />
        <section id="Learn"></section>
        <Learn />
        <section id="LookingforaJob"></section>
        <LookingforaJob />
        <section id="Footer"></section>
        <Footer />
      </div>
    );
  }
}
