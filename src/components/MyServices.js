import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPython, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

function MyServices() {
  return (
    <div className="mb-5" id="service">
      <Row className="head-start">
        <Col
          className="st-label"
          xs={{ span: 1 }}
          sm={{ span: 1 }}
          md={{ span: 2 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
        >
          Services
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
          02
        </Col>
      </Row>
      <Row className="ml-10">
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 5 }}
          xxl={{ span: 5 }}
        >
          <Card
            style={{
              width: "100%",
              backgroundColor: "#00283a",
              borderRadius: "10px",
              height: "auto",
              marginTop: "30px",
            }}
            className="service-card"
          >
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faCode} className="fieldss" />
              </Card.Title>
              <Card.Title>Web Design and Development</Card.Title>
              <Card.Text>
                Consectetur adipisicing elit. Rem minima maiores, praesentium,
                aperiam eveniet tenetur consequatur beatae id est.Consectetur
                adipisicing elit
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 5 }}
          xxl={{ span: 5 }}
        >
          <Card
            style={{
              width: "100%",
              backgroundColor: "#00283a",
              borderRadius: "10px",
              height: "auto",
              marginLeft: "85px",
              marginTop: "30px",
            }}
            className="service-card service-card2"
          >
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faPython} className="fieldss" />
              </Card.Title>
              <Card.Title>Python Programming</Card.Title>
              <Card.Text>
                Consectetur adipisicing elit. Rem minima maiores, praesentium,
                aperiam eveniet tenetur consequatur beatae id est.Consectetur
                adipisicing elit
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="ml-10">
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 5 }}
          xxl={{ span: 5 }}
        >
          <Card
            style={{
              width: "100%",
              backgroundColor: "#00283a",
              borderRadius: "10px",
              height: "auto",
              marginTop: "30px",
            }}
            className="service-card"
          >
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faWordpress} className="fieldss" />
              </Card.Title>
              <Card.Title>Wordpress</Card.Title>
              <Card.Text>
                Consectetur adipisicing elit. Rem minima maiores, praesentium,
                aperiam eveniet tenetur consequatur beatae id est.Consectetur
                adipisicing elit
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 5 }}
          xxl={{ span: 5 }}
        >
          <Card
            style={{
              width: "100%",
              backgroundColor: "#00283a",
              borderRadius: "10px",
              height: "auto",
              marginLeft: "85px",
              marginTop: "30px",
            }}
            className="service-card service-card2"
          >
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faDesktop} className="fieldss" />
              </Card.Title>
              <Card.Title>Desktop Application Development</Card.Title>
              <Card.Text>
                Consectetur adipisicing elit. Rem minima maiores, praesentium,
                aperiam eveniet tenetur consequatur beatae id est.Consectetur
                adipisicing elit
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyServices;
