import React from 'react';

const InputField = ({ value, onChange,setDisplay }) => {
  return (
    <input
      type="text"
      onClick={()=>{setDisplay(true)}}
      value={value}
      onChange={onChange}
      placeholder="Type to filter items"
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};

export default InputField;