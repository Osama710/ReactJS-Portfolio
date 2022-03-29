import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faAt,
  faAddressCard,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function MyContact() {
  return (
    <div id="contact">
      <Row className="head-start">
        <Col
          className="st-label"
          xs={{ span: 1 }}
          sm={{ span: 1 }}
          md={{ span: 2 }}
          lg={{ span: 2 }}
          xl={{ span: 2 }}
        >
          Contact
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
          04
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
              paddingLeft: "10px",
            }}
            className="contact-card"
          >
            <Card.Body>
              <Card.Title className="cont">
                <FontAwesomeIcon icon={faAddressCard} className="fields" />
              </Card.Title>
              <Card.Text>
                <Row>
                  <Col className="hh">Country</Col>
                  <Col className="dd">Pakistan</Col>
                </Row>
                <Row>
                  <Col className="hh">City</Col>
                  <Col className="dd">Karachi</Col>
                </Row>
                <Row>
                  <Col className="hh">University</Col>
                  <Col className="dd">Usman Institute of Technology</Col>
                </Row>
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
              marginLeft: "70px",
              marginTop: "30px",
              paddingLeft: "10px",
              marginRight: "20px",
            }}
            className="contact-card"
          >
            <Card.Body>
              <Card.Title className="cont">
                <FontAwesomeIcon icon={faAt} className="fields" />
              </Card.Title>
              <Card.Text>
                <Row>
                  <Col className="hh">Email</Col>
                  <Col className="dd">osamamymini@gmail.com</Col>
                </Row>
                <Row>
                  <Col className="hh">Phone</Col>
                  <Col className="dd">+92 336 2417513</Col>
                </Row>
                <Row>
                  <Col className="hh">LinkedIn</Col>
                  <Col className="dd">osama-yousuf-6a1952177</Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 12 }}
        xxl={{ span: 11 }}
      >
        <Row className="contactnow">
          <Col className="col-1"></Col>
          <Col className="col-2">
            <a href="mailto:osamamymini@gmail.com">
              <h4>
                <FontAwesomeIcon icon={faEnvelope} />
              </h4>
            </a>
          </Col>
          <Col className="col-2">
            <a href="https://linkedin.com/in/osama-yousuf-6a1952177/">
              <h4>
                <FontAwesomeIcon icon={faLinkedin} />
              </h4>
            </a>
          </Col>
          <Col className="col-2">
            <a href="https://github.com/Osama710">
              <h4>
                <FontAwesomeIcon icon={faGithub} />
              </h4>
            </a>
          </Col>
          <Col className="col-2">
            <a href="#">
              <h4>
                <FontAwesomeIcon icon={faInstagram} />
              </h4>
            </a>
          </Col>
          <Col className="col-2">
            <a href="#">
              <h4>
                <FontAwesomeIcon icon={faWhatsapp} />
              </h4>
            </a>
          </Col>
        </Row>
      </Col>
      <Row className="">
        <h4 className="get-in mt-2">Get In Touch</h4>
      </Row>
      <Row>
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
              height: "auto",
              marginBottom: "30px",
              marginLeft: "25px",
            }}
            className="contact-form"
          >
            <Card.Body>
              <Card.Text className="p-3">
                <form>
                  <input
                    type="text"
                    placeholder="&#xf007;    Name"
                    style={{ fontFamily: "FontAwesome" }}
                    className="form-control inp-data"
                  />
                  <input
                    type="text"
                    placeholder="&#xf1fa;    Email"
                    style={{ fontFamily: "FontAwesome" }}
                    className="form-control mt-4 inp-data"
                  />
                  <textarea
                    placeholder="&#xf0e0;    Message"
                    style={{ fontFamily: "FontAwesome" }}
                    className="form-control mt-4 inp-msg"
                  />
                  <button className="btn">
                    Send{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="myicon" />
                  </button>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyContact;
