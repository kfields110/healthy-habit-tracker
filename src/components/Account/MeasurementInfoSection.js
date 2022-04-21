import { useState } from "react";
import React from "react";
import MeasurementEditModal from "./MeasurementEditModal";
import Backdrop from "./Backdrop";

const measurementInfo = [
  {
    id: "m1",
    label: "Height: ",
    content: "6'1",
  },
  {
    id: "m2",
    label: "Weight: ",
    content: "200 lbs",
  },
  {
    id: "m3",
    label: "Age: ",
    content: "33",
  },
];

function MeasurementInfoSection() {
  const [editMeasurementIsOpen, setEditMIsOpen] = useState(false);
  //const [height, setHeight] = useState(measurementInfo[0].content);
  //const [weight, setWeight] = useState(measurementInfo[1].content);
  //const [age, setAge] = useState(measurementInfo[2].content);

  function modalToInfoSection(newHeight, newWeight, newAge){
    measurementInfo[0].content = newHeight;
    //setHeight(newHeight);
    measurementInfo[1].content = newWeight;
    //setWeight(newWeight);
    measurementInfo[2].content = newAge;
    //setAge(newAge);
  };

  function editMeasurementHandler() {
    setEditMIsOpen(true);
  }
  function closeMeasurementHandler() {
    setEditMIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h3>Measurement Info</h3>
        <div className="line-break">
          <ul>
            {measurementInfo.map((info) => {
              return (
                <li key={info.id}>
                  {info.label} {info.content}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="actions">
          <p>{"\n"}</p>
            <button className="btn" onClick={editMeasurementHandler}>
              Edit Measurement
            </button>
          
        </div>

        {editMeasurementIsOpen && (
          <MeasurementEditModal
            onCancel={closeMeasurementHandler}
            onSave={closeMeasurementHandler}
            info={measurementInfo}
            modalToInfoSection={modalToInfoSection}
          />
        )}
        {editMeasurementIsOpen && <Backdrop onCancel={closeMeasurementHandler} />}
      </div>
    </div>
  );
}

export default MeasurementInfoSection;
