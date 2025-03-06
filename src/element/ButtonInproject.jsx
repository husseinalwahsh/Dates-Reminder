import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function ButtonInproject({ onDelete, onDisply }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="p">
        <Button
          className="btn btn-danger"
          onClick={() => {
            onDelete();
          }}
        >
          مسح الكل
        </Button>
        <Button
          className="btn btn-secondary"
          onClick={() => {
            onDisply();
          }}
        >
          عرض البيانات{" "}
        </Button>
      </Col>
    </Row>
  );
}

export default ButtonInproject;
