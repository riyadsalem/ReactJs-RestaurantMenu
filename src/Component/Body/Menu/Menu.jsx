import "./Menu.css";
import React, { Component } from "react";
import MenuItem from "./MenuItem/MenuItem";
import DISHES from "../../../data/dishes";

export default class Menu extends Component {
  state = { dishes: DISHES };
  render() {
    const menu = this.state.dishes.map((item) => {
      return <MenuItem key={item.id} dish={item} />;
    });

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">{menu}</div>
            <div className="col-6"></div>
          </div>
        </div>
      </>
    );
  }
}
