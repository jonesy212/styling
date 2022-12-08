import React from "react";
import { CARD, CARDICON } from "../constants";
import "./InputBase.css";

const InputBase = ({ errorMsg, error, cardType, isCard, ...props }) => (
  //props being spread give access to attributes such as type submit in Form.jsx
  <label htmlFor="">
    <input className="input-root" {...props} />
    {errorMsg && <div className="error">{errorMsg}</div>}
    {(!error || !error.cardError) && isCard && CARD.includes(cardType) && (
      <img
        style={{
          position: "absolute",
          top: "5px",
          right: "18px",
          width: "50px",
        }}
        src={CARDICON[cardType]}
        alt="card"
      />
    )}
  </label>
);

export default InputBase;
