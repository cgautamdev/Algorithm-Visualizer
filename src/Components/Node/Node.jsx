import React from "react";
import "./Node.css";

const Node = ({ id, type, isBottomEdge, isRightEdge }) => {
   return (
      <div
         className={`node ${type} ${isBottomEdge ? "bottom-edge" : ""} ${isRightEdge ? "right-edge" : ""}`}
         id={id}
      ></div>
   );
};

export default Node;
