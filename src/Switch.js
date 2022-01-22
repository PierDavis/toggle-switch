import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };

  <label
//   style={{ background: isOn && '#06D6A0' }}
  className="react-switch-label"
  htmlFor={`react-switch-new`}
></label>


export default Switch;