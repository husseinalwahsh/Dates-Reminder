import React from "react";
function InformationData({ person }) {
  return (
    <>
      {person.map((item) => {
        return (
          <div className="d-flex  border-bottom mx-2 my-2">
            <img src={item.img} alt="" className="img-avatar" />
            <div className="px-3">
              <p className="d-inline almarai-regular">{item.name}</p>
              <p className=" almarai-light"> {item.date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InformationData;
