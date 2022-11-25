import React, { Component } from "react";
import "./index.scss"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__made-by">
          <p>Made by <a href="https://github.com/ecpieritz" target="_blank">Emilyn Pieritz</a></p>
        </div>

        <div className="header__search">
          <input type="text" placeholder="Which artist do you want to find?" />
        </div>
      </header>
    )
  }
};

export default Header;