import { useState } from "react";
import React from "react";
import GeneralEditModal from "./GeneralEditModal";
import Backdrop from "./Backdrop";

const generalInfo = [
  {
    id: "g1",
    label: "First Name: ",
    content: "Preston",
  },
  {
    id: "g2",
    label: "Last Name: ",
    content: "Garvey",
  },
  {
    id: "g3",
    label: "Email: ",
    content: "minuteman4life@gmail.com",
  },
]; 

function GeneralInfoSection() {
  const [editGeneralIsOpen, setEditGeneralIsOpen] = useState(false);
  //const [fName, setFName] = useState(generalInfo[0].content);
  //const [lName, setLName] = useState(generalInfo[1].content);
  //const [email, setEmail] = useState(generalInfo[2].content);
  
  function modalToInfoSection(newFName, newLName, newEmail){
    generalInfo[0].content = newFName;
    //setFName(newFName);
    generalInfo[1].content = newLName;
    //setLName(newLName);
    generalInfo[2].content = newEmail;
    //setEmail(newEmail);
  };

  function editGeneralHandler() {
    setEditGeneralIsOpen(true);
  }
  function closeGeneralHandler() {
    setEditGeneralIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h3>General Info</h3>
        <div className="line-break">
          <ul>
            {generalInfo.map((info) => {
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
          <button className="btn" onClick={editGeneralHandler}>
            Edit General
          </button>
        </div>

        {editGeneralIsOpen && (
          <GeneralEditModal
            onCancel={closeGeneralHandler}
            onSave={closeGeneralHandler}
            info={generalInfo}
            modalToInfoSection={modalToInfoSection}
          />
        )}
        {editGeneralIsOpen && <Backdrop onCancel={closeGeneralHandler} />}
      </div>
    </div>
  );
}


export default GeneralInfoSection;