import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <label style={distance}>Distance</label>
      <input onChange={onChangeHandler} style={distanceInput} name="distance" id="distance"></input>

      <select onChange={onChangeHandler} style={genderButton} name="gender" id="gender">
        <option value="female" style={gender}>Female</option>
        <option value="male" style={gender}>Male</option>
      </select>

      <label style={age}>Age</label>
      <input onChange={onChangeHandler} style={ageInput} name="age" id="age"></input>
    </>
  );
};

//inline styling
const distance = {
  fontSize: '19px',
  padding: '25px',
  paddingTop: '2px',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: '800px',
  color: '#4B3021'
}
const distanceInput = {
  padding: '10px',
  marginTop: '300px',
  marginRight: '20px',
  color: '#4B3021',
  textAlign: 'center',
  fontSize: '19px'

}

const age = {
  fontSize: '19px',
  padding: '25px',
  paddingTop: '2px',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: '',
  color: '#4B3021'

}
const ageInput = {
  padding: '10px',
  marginTop: '200px',
  marginRight: '20px',
  color: '#4B3021',
  textAlign: 'center',
  fontSize: '19px',

}

const genderButton = {
  fontSize: '15px',
  paddingTop: '13px',
  paddingBottom: '12px',
  paddingLeft: '20px',
  paddingRight: '20px',
  alignItems: 'center',
  display: 'inline-block',
  color: '#4B3021',
  backgroundColor: 'white',
  borderRadius: '4px'
}
const gender = {
  fontSize: '15px',
  padding: '10px',
  alignItems: 'center',
  color: '#4B3021'
}

export default InputFields;
