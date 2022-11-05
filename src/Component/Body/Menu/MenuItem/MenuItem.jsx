import "./MenuItem.css";
import { Card, Container, Col } from "react-bootstrap";
import { Fragment } from "react";

const MenuItem = (props) => {
  return (
    <>
      <Fragment>
        <Container>
          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={props.dish.image} />
              <Card.Body>
                <Card.Title
                  style={{ cursor: "pointer" }}
                  onClick={props.DishSelect}
                >
                  {props.dish.name}
                </Card.Title>
                <Card.Text>{props.dish.description}</Card.Text>
                <p style={{ fontWeight: "bold" }}>Price: {props.dish.price}</p>
                <p style={{ fontWeight: "bold" }}>
                  Label:{" "}
                  {props.dish.label !== "" ? props.dish.label : "Not Found"}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </Fragment>
    </>
  );
};

export default MenuItem;
