import React, { Component } from "react";
import "./index.scss"

class Video extends Component {
  render() {
    return (
      <main className="main col-md-8">
        <div className="video">
          <div className="video__media"></div>
          <div className="video__title"></div>
          <div className="video__description"></div>
        </div>
      </main>
    )
  }
};

export default Video