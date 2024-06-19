function InputField({ type, Label, name, value, handleUserData, isEmpty, marginRight }) {
    const inputClassName = isEmpty ? 'emptyInput' : '';
  
    return (
      <div className="input-group">
        
        <div className={`input-label ${marginRight?"mr-16px":""}`}> <label htmlFor={Label}>{Label} : </label></div>
        <div><input
          type={type}
          id={Label}
          name={name}
          value={value}
          onChange={handleUserData}
          className={inputClassName}
        /></div>
      </div>
    );
  }
  export default InputField;