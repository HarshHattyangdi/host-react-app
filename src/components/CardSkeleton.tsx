import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <SkeletonTheme color="#c7cdd6" highlightColor="#909396">
      <Container fluid>
        <Row>
          <Col md={3} lg={3}></Col>
          <Col sm={12} md={6} lg={6}>
            <Card className="mt-5" color="#c7cdd6">
              <Row>
                <Col sm={12} md={3} lg={3}>
                  <Skeleton />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>
                      <Skeleton />
                    </Card.Title>
                    <Skeleton />

                    <Card.Text>
                      <Row>
                        <Col>
                          <Skeleton />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Skeleton />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Skeleton />
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </SkeletonTheme>
  );
}

export default CardSkeleton;
