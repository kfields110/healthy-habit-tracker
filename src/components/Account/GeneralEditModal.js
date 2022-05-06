import React, { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useFirestore} from '../../hooks/useFirestore'

//Modal that pops up and sends user input to Firestore database
//Requirement 1.1.1

function GeneralEditModal(props) {
  const {user} = useAuthContext()
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailInfoRef = useRef();

  const {updateDocument, response} = useFirestore('users')
  
  const saveHandler = async (event) => {
    event.preventDefault();
   
    await updateDocument(user.uid,
      {firstName: firstNameRef.current.value,
       lastName: lastNameRef.current.value,
       email: emailInfoRef.current.value
      }
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
                ref={firstNameRef}
              />
            </li>
          </form>
          <form>
            <li key={props.info[1].id}>
              {props.info[1].label}
              <input
                defaultValue={props.info[1].content}
                type="text"
                ref={lastNameRef}
              />
            </li>
          </form>
          <form>
            <li key={props.info[2].id}>
              {props.info[2].label}
              <input
                defaultValue={props.info[2].content}
                type="text"
                ref={emailInfoRef}
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

export default GeneralEditModal;
