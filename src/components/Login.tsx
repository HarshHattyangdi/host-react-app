import React, { useState } from "react";
import auth from "./Auth";
import { Container, Form, Card, Row, Col } from "react-bootstrap";

import { withRouter } from "react-router";

const Login = (props: any) => {
  const [username, setUsername] = useState(" ");
  return (
    <Container
      style={{
        marginTop: "10%",
      }}
    >
      <Row>
        <Col md={3} lg={3}></Col>
        <Col sm={12} md={6} lg={6}>
          <Card className="mt4">
            <Form
              onSubmit={() => {
                console.log(username);

                auth.login(() => {
                  props.history.push("/content", username);
                });
              }}
            >
              <Row>
                <Col md={2} lg={2}></Col>
                <Col sm={12} md={8} lg={8}>
                  <Form.Group
                    className="m-1 mr-1 ml-1 mt-5 p1"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      required
                      onChange={({ target }) => setUsername(target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={2} lg={2}></Col>
                <Col sm={12} md={8} lg={8}>
                  <Form.Group
                    className="m-1 mr-1 ml-1 mb-3 p1"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={2} lg={2}></Col>
                <Col sm={12} md={8} lg={8}>
                  <Form.Group
                    className="m-1 mr-1 ml-1 mb-5 p1"
                    controlId="formValid"
                  >
                    <Form.Control
                      type="submit"
                      value="Login"
                      className="btn btn-primary"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Login);
