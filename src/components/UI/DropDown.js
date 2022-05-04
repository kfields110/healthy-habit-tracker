import { useState } from "react";
import './DropDownStyles.css'

const Dropdown = (props, { selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = props.options;


  // Resuable dynamic dropbar that can be used anywhere in the app.
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;