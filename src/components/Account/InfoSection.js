import { useState } from "react";
import React from "react";
import EditingModal from "./EditingModal";
import Backdrop from "./Backdrop";

function InfoSection(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function editInfoHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h3>{props.title}</h3>
        <div className="line-break">
          <ul>
            {props.info.map((info) => {
            return <li key={info.id}>{info.label} {info.content}</li>
          })}
          </ul>
        </div>
        <div className="actions">
          <p>{"\n"}</p>
          <button className="btn" onClick={editInfoHandler}>
            Edit
          </button>
        </div>

        {modalIsOpen && (
          <EditingModal onCancel={closeModalHandler} onSave={closeModalHandler} info={props.info}/>
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default InfoSection;
