import { Col, Container, Row } from "react-bootstrap";
import InformationData from "./AllInformationData.jsx";
import Title from "./Title.jsx";
import ButtonInproject from "./ButtonInproject.jsx";
import { person } from "../data.js";
import { useState } from "react";
function DatesReminder() {
  const [length, setLength] = useState(person.length);

  return (
    <div className="almarai-bold">
      <Container className="py-5">
        <Title length={length} />
        <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle my-1 p-2">
              {person.length ? (
                <InformationData person={person} />
              ) : (
                <h2 style={{ color: "red" }} className="px-2">
                  لا يوجد مواعيد
                </h2>
              )}
            </div>
          </Col>
        </Row>
        <ButtonInproject />
      </Container>
    </div>
  );
}

export default DatesReminder;
