import { useState } from "react";
import React from "react";
import EditingModal from "./EditingModal";
import Backdrop from "./Backdrop";

function InfoSection(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState("");

  const modalToInfoSection = (modalData) => {
    setData(modalData);
  };

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
        <div>
          <ul >
            {data}
            {props.info.map((info) => {
              return (
                <li key={info.id}>
                  {info.label} {info.content} {data}
                </li>
              );
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
          <EditingModal
            onCancel={closeModalHandler}
            onSave={closeModalHandler}
            info={props.info}
            modalToInfoSection={modalToInfoSection}
          />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default InfoSection;
