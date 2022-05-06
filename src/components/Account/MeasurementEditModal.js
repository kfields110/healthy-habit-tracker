import React, { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useFirestore} from '../../hooks/useFirestore'

//This modal allows for a user to change their measurement and is then saved to firebase when submitted.
//Requirement 1.2.0

function MeasurementEditModal(props) {
  const {user} = useAuthContext()
  const heightRef = useRef();
  const weightRef = useRef();
  const ageRef = useRef();

  const {updateDocument, response} = useFirestore('users')

  const saveHandler = async (event) => {
    event.preventDefault();
   
    await updateDocument(user.uid,
      {height: heightRef.current.value,
       weight:weightRef.current.value,
       age: ageRef.current.value}
    )
    
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
