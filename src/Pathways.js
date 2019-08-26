import React from "react";
import PathwayGraph from "./PathwayGraph";

const Pathways = props => {
  return (
    <div>
      <h1>pathways</h1>
      <PathwayGraph handleSelectArchetype={props.handleSelectArchetype} />
    </div>
  );
};

export default Pathways;
