import React from "react";
import "./Node.css";

// node will contain infos like visited, unvisited, start, end, wall later on
const Node = ({ type, isRightEdge, isBottomEdge }) => {
   return (
      <div
         className={`node ${type} ${isRightEdge ? "right-edge" : ""} ${isBottomEdge ? "bottom-edge" : ""}`}
      ></div>
   );
};

export default Node;
