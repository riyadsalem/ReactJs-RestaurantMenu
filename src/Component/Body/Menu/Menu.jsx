import "./Menu.css";
import React, { Component } from "react";
import MenuItem from "./MenuItem/MenuItem";
import DISHES from "../../../data/dishes";
import DishDetail from "./DishDetail/DishDetail";

export default class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
  };

  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem key={item.id} dish={item} DishSelect={this.onDishSelect} />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      dishDetail = <DishDetail dish={this.state.selectedDish} />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">{menu}</div>
            <div className="col-6">{dishDetail}</div>
          </div>
        </div>
      </>
    );
  }
}
