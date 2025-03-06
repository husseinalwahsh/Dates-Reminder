import { Button, Col, Container, Row } from "react-bootstrap";
function DatesReminder() {
  return (
    <div
      className="almarai-bold"
      style={{ background: "#f8f8f8f8", height: "100vh", boxShadow: "" }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8" className="">
            لديك اربع مواعيد
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle my-1"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="p">
            <Button className="btn btn-danger"> مسح الكل </Button>
            <Button className="btn btn-secondary">عرض البيانات </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DatesReminder;
