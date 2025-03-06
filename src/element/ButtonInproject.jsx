import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function ButtonInproject() {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="p">
        <Button className="btn btn-danger"> مسح الكل </Button>
        <Button className="btn btn-secondary">عرض البيانات </Button>
      </Col>
    </Row>
  );
}

export default ButtonInproject;
