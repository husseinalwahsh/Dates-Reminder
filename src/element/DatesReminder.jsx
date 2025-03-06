import { Container } from "react-bootstrap";
import InformationData from "./AllInformationData.jsx";
import Title from "./Title.jsx";
import ButtonInproject from "./ButtonInproject.jsx";
import { person } from "../data.js";
import { useState } from "react";
function DatesReminder() {
  const [personData, setDataPerson] = useState(person);
  const onDelete = () => {
    setDataPerson([]);
  };
  const onDisply = () => {
    setDataPerson(person);
  };
  return (
    <div className="almarai-bold">
      <Container className="py-5">
        <Title length={personData} />
        <InformationData person={personData} />
        <ButtonInproject onDelete={onDelete} onDisply={onDisply} />
      </Container>
    </div>
  );
}

export default DatesReminder;
