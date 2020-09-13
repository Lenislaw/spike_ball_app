import React from "react";
import Action from "./Action";
import SetPointsTotal from "./SetPointsTotal";

const ResultSet = ({ name, set }) => {
  return (
    <div className="set">
      <h3>{name}</h3>
      <div className="set-points">
        {set.map((action, index) => (
          <Action
            key={`${index}-setOne`}
            action={action}
            index={index}
            length={set.length}
          />
        ))}
        <SetPointsTotal set={set} />
      </div>
    </div>
  );
};

export default ResultSet;
