import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <label style={label}>Distance</label>
      <input onChange={onChangeHandler} style={input} name="distance" id="distance"></input>

      <select onChange={onChangeHandler} style={input} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label style={label}>Age</label>
      <input onChange={onChangeHandler} style={input} name="age" id="age"></input>
    </>
  );
};

//inline styling
const label = {
  fontSize: '25px',
  padding: '25px',
  alignItems: 'center',
  paddingTop: '200px'
}

const input = {
  padding: '10px'
}


export default InputFields;
