import React from "react";

const Coin = ({ ballPossessionFlip }) => {
  return (
    <div className="coin">
      <div
        className={
          ballPossessionFlip.teamOne ? "coin-back red" : "coin-back blue"
        }
      ></div>
    </div>
  );
};

export default Coin;
