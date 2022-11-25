import React, { Component } from "react";
import Header from "../../components/header";
import List from "../../components/list";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div>video</div>
            <List />
          </div>
        </div>
      </>
    )
  }
};

export default Home