import React from "react";

function Modal(props) {
  function saveHandler() {
    props.onCancel();
  }

  function cancelHandler() {
    props.onSave();
  }

  return (
    <div className="modal">
      <p>Editing Mode</p>
      <div className="modal-body">
        <ul>
          {props.info.map((info) => {
            return (
              <li key={info.id}>
                {info.label}
                <input type="text" name="country" id="country" value={info.content}/> 
              </li>
            );
          })}
        </ul>
      </div>
      <p>{"\n\n\n"}</p>

      <button className="btn btn--alt" onClick={saveHandler}>
        Thing is Edited! SAVE!
      </button>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default Modal;
