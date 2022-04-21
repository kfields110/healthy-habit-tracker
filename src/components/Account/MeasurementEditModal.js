import React, { useRef } from "react";

function MeasurementEditModal(props) {
  const heightRef = useRef();
  const weightRef = useRef();
  const ageRef = useRef();

  function saveHandler(event) {
    event.preventDefault();
    props.modalToInfoSection(
      heightRef.current.value,
      weightRef.current.value,
      ageRef.current.value
    );
    props.onSave();
  }

  function cancelHandler(event) {
    event.preventDefault();
    props.onCancel();
  }

  return (
    <div className="modal">
      <p>Editing Mode</p>
      <div className="modal-body">
        <ul>
          <form>
            <li key={props.info[0].id}>
              {props.info[0].label}
              <input
                defaultValue={props.info[0].content}
                type="text"
                ref={heightRef}
              />
            </li>
          </form>
          <form>
            <li key={props.info[1].id}>
              {props.info[1].label}
              <input
                defaultValue={props.info[1].content}
                type="text"
                ref={weightRef}
              />
            </li>
          </form>
          <form>
            <li key={props.info[2].id}>
              {props.info[2].label}
              <input
                defaultValue={props.info[2].content}
                type="text"
                ref={ageRef}
                
              />
            </li>
          </form>
        </ul>
      </div>
      <p>{"\n\n\n"}</p>

      <button className="btn btn--alt" onClick={saveHandler}>
        SAVE!
      </button>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default MeasurementEditModal;
