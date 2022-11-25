import React, { Component } from "react";
import "./index.scss"
import Header from "../../components/header";
import List from "../../components/list";
import Video from "../../components/video";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <Video />
            <List />
          </div>
        </div>
      </>
    )
  }
};

export default Home