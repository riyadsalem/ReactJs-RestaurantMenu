import { Component, Fragment } from "react";
import "./Contact.css";
import {
  Form,
  Row,
  FloatingLabel,
  Button,
  Col,
  Container,
} from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      message: "",
      agree: false,
    };
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    // console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Fragment>
          <Container>
            <Row>
              <Form onSubmit={this.handleSubmit}>
                <h1>Send us your FeedBack</h1>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      onChange={this.handleInputChange}
                      value={this.state.firstname}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      onChange={this.handleInputChange}
                      value={this.state.lastname}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="number"
                      name="mobile"
                      placeholder="Mobile"
                      onChange={this.handleInputChange}
                      value={this.state.mobile}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={this.handleInputChange}
                      value={this.state.email}
                    />
                  </Form.Group>
                </Row>

                <Form.Label>Message</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Message"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a Message here"
                    name="message"
                    onChange={this.handleInputChange}
                    value={this.state.message}
                  />
                </FloatingLabel>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="agree"
                    label="May we contact you?"
                    onChange={this.handleInputChange}
                    checked={this.state.agree}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
          </Container>
        </Fragment>
      </>
    );
  }
}
