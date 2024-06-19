
import React from 'react';
const TextInput = ({ label, type, value, onChange, placeholder, required }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
return (
    <div className='input-group'>
      <label className='input-label'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextInput;
