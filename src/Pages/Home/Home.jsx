import { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    document.title = "Restaurant Project";

    return (
      <>
        <h1>This is Home Page</h1>
      </>
    );
  }
}
