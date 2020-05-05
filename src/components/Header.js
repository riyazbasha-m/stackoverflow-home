import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Form from "react-bootstrap/Form";
import SearchIcon from "@material-ui/icons/Search";

export default class Header extends Component {
  render() {
    return (
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
    );
  }
}
