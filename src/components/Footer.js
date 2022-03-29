import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 12 }}
      xl={{ span: 12 }}
      xxl={{ span: 12 }}
    >
      <Row className="footer">
        <Col className="footer-data">
          <FontAwesomeIcon icon={faCopyright} className="footer-icon" />
          <span className="foot-d">2021 ALL RIGHTS RESERVED.</span>
        </Col>
        <Col className="footer-data">
          <span className="foot-d">DESIGNED BY: </span>
          <span className="footer-name">MUHAMMAD OSAMA</span>
        </Col>
      </Row>
    </Col>
  );
}

export default Footer;
