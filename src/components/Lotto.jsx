import React from "react";
import "./lotto.css";

export default function Lotto() {
    const randNum = () => {
        let lottoPick;
        lottoPick = Math.floor(Math.random() * 90) 
        if(lottoPick < 10) {
            lottoPick = `0${lottoPick}`
        }
        return lottoPick
    }
  return (
    <div className="lotto">
        <div className="number-div">
            <div className="number">{randNum()}</div>
            <div className="number">{randNum()}</div>
            <div className="number">{randNum()}</div>
            <div className="number">{randNum()}</div>
            <div className="number">{randNum()}</div>
        </div>

    </div>
  );
}
