import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cardimg from "../images/cardimg.JPG";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function InfoCard() {
  return (
    <div>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 12 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
        xl={{ span: 12 }}
      >
        <Card
          style={{
            width: "100%",
            backgroundColor: "#00283a",
            borderRadius: "20px",
            padding: "25px",
            height: "auto",
          }}
          className="my-card"
        >
          <Card.Img variant="top" src={cardimg} />
          <Card.Body>
            <Card.Title>Muhammad Osama</Card.Title>
            <div className="field">
              <span>I'm a </span>
              <span class="cd-words-wrapper">
                <b class="is-visible">Web Developer</b>
                <b>Front End Developer.</b>
                <b>Python Programmer.</b>
                <b>Graphic Designer.</b>
                <b>Freelancer.</b>
              </span>
            </div>
            <hr></hr>
            <div className="socials pt-2" id="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <hr></hr>
            <Card.Text>
              <div className="card-text-data">
                <Row>
                  <Col className="name pt-1">Residence:</Col>
                  <Col className="pt-1">Pakistan</Col>
                </Row>
                <Row>
                  <Col className="name pt-1">City:</Col>
                  <Col className="pt-1">Karachi</Col>
                </Row>
                <Row>
                  <Col className="name pt-1">Age:</Col>
                  <Col className="pt-1">21</Col>
                </Row>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default InfoCard;
