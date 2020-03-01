import React from "react";

import coopercalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = coopercalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
          <p id="cooper-message" style={message2}>
            {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result" style={message2}>Result: {result}</p>
          {authenticated && !entrySaved ? (
            <button
              id="save-result"
              style={resultButton}
              onClick={() => saveData(result, distance, entryHandler)}
            >
              Save entry
            </button >
            ) : (
            <p id="response-message" style={message2}>Your entry was saved</p>
          )}
        </>
      )}
    </>
  );
};

const resultButton = {
  fontSize: '15px',
  marginLeft: '950px',
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingTop: '12px',
  paddingBottom: '13px',
  alignItems: 'center',
  display: 'inline-block',
  backgroundColor: 'white',
  color: '#4B3021',
  borderRadius: '4px'
}

const message2 = {
  fontSize: '45px',
  alignItems: 'center',
  marginLeft: '950px',
  color: '#4B3021'
}

export default DisplayCooperResult;