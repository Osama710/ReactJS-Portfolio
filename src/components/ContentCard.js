import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentCard() {
  return (
    <Row className="pb-4 me-3">
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 4 }}
        xxl={{ span: 4 }}
      >
        <Card
          style={{
            width: "100%",
            backgroundColor: "#00283a",
            borderRadius: "10px",
            height: "auto",
          }}
          className="cont-card"
        >
          <Card.Body>
            <Card.Title>30+</Card.Title>
            <hr></hr>
            <Card.Text>
              Completed<br></br>Projects
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 4 }}
        xxl={{ span: 4 }}
      >
        <Card
          style={{
            width: "100%",
            backgroundColor: "#00283a",
            borderRadius: "10px",
            height: "auto",
          }}
          className="cont-card"
        >
          <Card.Body>
            <Card.Title>20+</Card.Title>
            <hr></hr>
            <Card.Text>
              Happy<br></br>Clients
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 4 }}
        xxl={{ span: 4 }}
      >
        <Card
          style={{
            width: "100%",
            backgroundColor: "#00283a",
            borderRadius: "10px",
            height: "auto",
          }}
          className="cont-card"
        >
          <Card.Body>
            <Card.Title>10+</Card.Title>
            <hr></hr>
            <Card.Text>
              Honors and<br></br>Awards
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>{" "}
    </Row>
  );
}

export default ContentCard;
