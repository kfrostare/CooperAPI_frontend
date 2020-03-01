import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <label style={distance}>Distance</label>
      <input onChange={onChangeHandler} style={distanceInput} name="distance" id="distance"></input>

      <select onChange={onChangeHandler} style={button} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label style={age}>Age</label>
      <input onChange={onChangeHandler} style={ageInput} name="age" id="age"></input>
    </>
  );
};

//inline styling
const distance = {
  fontSize: '25px',
  padding: '25px',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: '850px'
}
const distanceInput = {
  padding: '10px',
  marginTop: '200px',
  marginRight: '20px'

}

const age = {
  fontSize: '25px',
  padding: '25px',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: ''

}
const ageInput = {
  padding: '10px',
  marginTop: '200px',
  marginRight: '20px'

}

const button = {
  fontSize: '15px',
  padding: '10px',
  alignItems: 'center',
  display: 'inline-block'
}

export default InputFields;
