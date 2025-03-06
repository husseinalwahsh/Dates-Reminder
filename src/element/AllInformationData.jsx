import React from "react";
import { Col, Row } from "react-bootstrap";
function InformationData({ person }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle my-1 p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex  border-bottom mx-2 my-2">
                  <img src={item.img} alt="" className="img-avatar" />
                  <div className="px-3">
                    <p className="d-inline almarai-regular">{item.name}</p>
                    <p className=" almarai-light"> {item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 style={{ color: "red" }} className="px-2">
              لا يوجد مواعيد
            </h2>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default InformationData;
