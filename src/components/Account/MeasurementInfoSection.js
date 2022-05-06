import { useState } from "react";
import React from "react";
import MeasurementEditModal from "./MeasurementEditModal";
import Backdrop from "./Backdrop";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useDocument} from "../../hooks/useDocument"

//function that connects to firebase documents. Allows users to input information about themselves. 
//Requirement 1.2.0

function MeasurementInfoSection() {
  const {user} = useAuthContext()
  const {error, document} = useDocument('users', user.uid)

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

  
  

 
  if(error){
    return <div>error</div>

  }
  if(!document) {
    return <div>Loading...</div>
  }

  const measurementInfo = [
    {
      id: "m1",
      label: "Height: ",
      content: document.height,
    },
    {
      id: "m2",
      label: "Weight: ",
      content: document.weight,
    },
    {
      id: "m3",
      label: "Age: ",
      content: document.age,
    },
  ];

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
