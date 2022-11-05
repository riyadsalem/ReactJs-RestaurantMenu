import "./Menu.css";
import React, { Component } from "react";
import MenuItem from "./MenuItem/MenuItem";
import DISHES from "../../../data/dishes";
import COMMENTS from "../../../data/comments";
import DishDetail from "./DishDetail/DishDetail";
import { Container, Row, Modal, Button } from "react-bootstrap";

export default class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    selectedDish: null,
    show: false,
  };

  modalClose = () => this.setState({ show: false });
  // modalOpen = () => this.setState({ show: true });

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish, show: !this.state.show });
  };

  render() {
    document.title = "Menu page";
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          key={item.id}
          dish={item}
          DishSelect={() => this.onDishSelect(item)}
        />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id;
      });

      dishDetail = (
        <DishDetail dish={this.state.selectedDish} comments={comments} />
      );
    }

    return (
      <>
        <Container fluit={true}>
          <Row lg={3} md={3} sm={6} xs={6}>
            {menu}
          </Row>

          <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
            <Modal.Body>{dishDetail}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.modalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}
