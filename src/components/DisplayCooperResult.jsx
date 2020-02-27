import React from "react";
import cooperCaluclator from "../modules/cooperCalcualtor";

const DisplaayCooperResult = ({ distance, gender, age }) => {
    const calculate = () => {
        return cooperCalculator(distance, gender, age);
    };

    const propsPassed = distance && age ? true : false;

    return (
        <>
        {propsPassed && (
          <>
            <p id="cooper-message">
                {age} y/o {gender} running {distance} meters.
            </p>
            <p id="cooper-result">Result: {calculate()}</p>
          </>
        )}
        </>
    );
};

export default DisplayCooperResult;