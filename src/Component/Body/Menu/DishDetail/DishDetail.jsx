import "./DishDetail.css";
import { Card } from "react-bootstrap";
import DishComment from "../DishComment/DishComment";

const DishDetail = (props) => {
  return (
    <>
      <Card style={{ width: "48rem" }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title>{props.dish.name}</Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <p style={{ fontWeight: "bold" }}>Price: {props.dish.price}</p>
          <p style={{ fontWeight: "bold" }}>
            Label: {props.dish.label !== "" ? props.dish.label : "Not Found"}
          </p>
          <p style={{ fontWeight: "bold" }}>Category: {props.dish.category}</p>
          <hr />
          <DishComment comments={props.comments} />
        </Card.Body>
      </Card>
    </>
  );
};

export default DishDetail;
