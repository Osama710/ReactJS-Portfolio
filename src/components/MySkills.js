import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

function MySkills() {
  return (
    <div id="skill">
      <Row className="head-start">
        <Col
          className="st-label"
          xs={{ span: 1 }}
          sm={{ span: 1 }}
          md={{ span: 2 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
        >
          My Skills
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
          03
        </Col>
      </Row>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 11 }}
        xxl={{ span: 10 }}
      >
        <Card
          style={{
            width: "100%",
            backgroundColor: "#00283a",
            borderRadius: "10px",
            height: "auto",
            marginBottom: "30px",
            marginLeft: "25px",
            marginTop: "30px",
          }}
          className="skill-card"
        >
          <Card.Body>
            <Card.Text className="p-3">
              <div className="mt-0">
                <Row>
                  <Col className="skill-name">HTML</Col>
                  <Col className="skill-n">100%</Col>
                </Row>
                <Row className="mt-1">
                  <ProgressBar min="0" max="100" value={100} />
                </Row>
              </div>
              <div className="mt-4">
                <Row>
                  <Col className="skill-name">CSS</Col>
                  <Col className="skill-n">100%</Col>
                </Row>
                <Row className="mt-1">
                  <ProgressBar min="0" max="100" now={100} />
                </Row>
              </div>
              <div className="mt-4">
                <Row>
                  <Col className="skill-name">Python</Col>
                  <Col className="skill-n">80%</Col>
                </Row>
                <Row className="mt-1">
                  <ProgressBar min="0" max="100" now={80} />
                </Row>
              </div>
              <div className="mt-4">
                <Row>
                  <Col className="skill-name">Web Design</Col>
                  <Col className="skill-n">80%</Col>
                </Row>
                <Row className="mt-1">
                  <ProgressBar min="0" max="100" now={80} />
                </Row>
              </div>
              <div className="mt-4">
                <Row>
                  <Col className="skill-name">Wordpress</Col>
                  <Col className="skill-n">75%</Col>
                </Row>
                <Row className="mt-1">
                  <ProgressBar min="0" max="100" now={75} />
                </Row>
              </div>
              <div className="mt-4">
                <Row>
                  <Col className="skill-name">Graphic Design</Col>
                  <Col className="skill-n">60%</Col>
                </Row>
                <Row className="mt-1">
                  <ProgressBar min="0" max="100" now={60} />
                </Row>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default MySkills;
