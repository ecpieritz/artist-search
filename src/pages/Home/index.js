import React, { Component } from "react";
import {Provider} from 'react-redux';
import store from '../../store'
import "./index.scss";
import Header from "../../components/header";
import List from "../../components/list";
import Video from "../../components/video";

class Home extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <Header />
        <div className="container">
          <div className="row">
            <Video />
            <List />
          </div>
        </div>
      </Provider>
      </>
    )
  }
};

export default Home