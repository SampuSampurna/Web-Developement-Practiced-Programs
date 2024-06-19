import React from 'react';

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <div  className="radiobutton-group">
      <label className='radiobutton-label'>{label}
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
        />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
