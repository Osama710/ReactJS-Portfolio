import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function MyStory() {
  return (
    <div id="about">
      <Row className="head-start">
        <Col
          className="st-label"
          xs={{ span: 1 }}
          sm={{ span: 1 }}
          md={{ span: 2 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
        >
          My Story
        </Col>
        <Col
          xs={9}
          className="st-line"
          xs={{ span: 8 }}
          sm={{ span: 8 }}
          md={{ span: 9 }}
          lg={{ span: 9 }}
          xl={{ span: 9 }}
        >
          <hr></hr>
        </Col>
        <Col
          className="st-num"
          xs={{ span: 1 }}
          sm={{ span: 1 }}
          md={{ span: 1 }}
          lg={{ span: 1 }}
          xl={{ span: 1 }}
        >
          01
        </Col>
      </Row>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 11 }}
        xxl={{ span: 11 }}
      >
        <Card
          style={{
            width: "100%",
            backgroundColor: "#00283a",
            borderRadius: "10px",
            height: "auto ",
            marginBottom: "30px",
            marginTop: "30px",
          }}
          className="story-card"
        >
          <Card.Body>
            <Card.Text>
              Consectetur adipisicing elit. Rem minima maiores, praesentium,
              aperiam eveniet tenetur consequatur beatae id est.Consectetur
              adipisicing elit. Rem minima maiores, praesentium, aperiam eveniet
              tenetur consequatur beatae id est.Consectetur adipisicing elit.
              Rem minima maiores, praesentium, aperiam eveniet tenetur
              consequatur beatae id est.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default MyStory;
