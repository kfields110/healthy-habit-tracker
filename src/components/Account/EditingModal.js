import React, {useRef} from "react";

function Modal(props) {
  const infoInputRef = useRef();
  var data = "from Modal to Info section";

  function saveHandler() {
    data = infoInputRef.current.value;
    props.modalToInfoSection(data);
    props.onSave();
  }

  function cancelHandler() {
    props.onCancel();
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
                <input
                  type="text"
                  ref={infoInputRef}
                  defaultValue={info.content}
                />
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
