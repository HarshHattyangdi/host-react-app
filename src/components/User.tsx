import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaPhoneSquareAlt, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

function User({ user }: any) {
  // console.log(user.location.street);
  return (
    <Card className="mt-5">
      <Row>
        <Col sm={12} md={3} lg={3}>
          <Card.Img variant="top" src={user.picture.large} alt="" rounded />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>
              <p>
                {user.name.first} {user.name.last}
              </p>
            </Card.Title>
            <hr />

            <Card.Text>
              <Row>
                <Col>
                  <FaPhoneSquareAlt />
                  Phone : {user.cell}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FaMailBulk />
                  Email: {user.email}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FaMapMarkerAlt />
                  Address: {user.location.street.number},
                  {user.location.street.name}, {user.location.city},
                  {user.location.state}
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    // <div className="card">
    //   <h3>{user.name.first}</h3>
    //   <img src={user.picture.large} alt="" />
    // </div>
  );
}

export default User;
