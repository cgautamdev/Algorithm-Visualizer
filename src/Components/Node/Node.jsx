import React from "react";
import "./Node.css";

const Node = ({
   id,
   type,
   isBottomEdge,
   isRightEdge,
   start_node,
   end_node,
}) => {
   // default type is unvisited.
   return (
      <div
         className={`node ${type} ${isBottomEdge ? "bottom-edge" : ""} ${isRightEdge ? "right-edge" : ""} ${start_node ? "start-node" : ""} ${end_node ? "end-node" : ""}`}
         id={id}
      ></div>
   );
};

export default Node;
