import "./MenuItem.css";
import { Card } from "react-bootstrap";

const MenuItem = (props) => {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title
            style={{ cursor: "pointer" }}
            onClick={() => props.DishSelect(props.dish)}
          >
            {props.dish.name}
          </Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <p style={{ fontWeight: "bold" }}>Price: {props.dish.price}</p>
          <p style={{ fontWeight: "bold" }}>
            Label: {props.dish.label !== "" ? props.dish.label : "Not Found"}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default MenuItem;
