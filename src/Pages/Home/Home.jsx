import { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    document.title = "Restaurant Project";

    return (
      <div style={{ textAlign: "center" }}>
        <h1> Home Page</h1>
      </div>
    );
  }
}
