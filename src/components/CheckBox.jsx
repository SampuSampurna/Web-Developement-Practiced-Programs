import React from 'react';

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <div className='checkbox-group'>
      <label className='checkbox-label'>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
 