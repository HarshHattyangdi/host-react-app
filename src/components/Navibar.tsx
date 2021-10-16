import React from "react";
import { withRouter } from "react-router-dom";
import auth from "./Auth";
import { Container, Navbar, Button } from "react-bootstrap";

const Navibar = (props: any) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">Hello</Navbar.Brand>
      </Container>
      <Button
        variant="outline-dark"
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </Button>
    </Navbar>
    // <div>
    //   Hello User
    //   <input
    //     type="button"
    //     value="Logout"
    //     onClick={() => {
    //       auth.logout(() => {
    //         props.history.push("/");
    //       });
    //     }}
    //   />
    // </div>
  );
};

export default withRouter(Navibar);
