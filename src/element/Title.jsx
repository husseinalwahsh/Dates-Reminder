import React from "react";
import { Col, Row } from "react-bootstrap";

function Title({ length }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        لديك {length.length} مواعيد
      </Col>
    </Row>
  );
}

export default Title;
