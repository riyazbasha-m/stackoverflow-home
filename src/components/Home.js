import React, { Component } from "react";
import Header from "./Header";
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
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <ForDevelopers />
        <Business />
        <Unlock />
        <Table></Table>
        <Hire />
        <Questions />
        <Learn />
        <LookingforaJob />
        <Footer />
      </div>
    );
  }
}
