import React from "react";
import "./Grid.css";
import Node from "../Node/Node";

const Grid = ({ rows, cols }) => {
   // ---- Creating the grid
   // node stuff
   const nodes = []; // contains all the nodes
   // converting the rows and cols to nodes
   for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
         nodes.push({ row: r, col: c });
      }
   }
   // -----

   // nodes - start and end
   const start_node = { row: 2, col: 2 };
   const end_node = { row: 8, col: 8 };

   return (
      <div className="grid-container" style={{ "--grid-cols": cols }}>
         {nodes.map((singleNode) => {
            const nodeId = `node-${singleNode.row}-${singleNode.col}`;

            const nodeType = "unvisited";

            return (
               <Node
                  key={nodeId}
                  id={nodeId}
                  type={nodeType} // by default
                  isBottomEdge={singleNode.row === rows - 1}
                  isRightEdge={singleNode.col === cols - 1}
                  start_node={
                     singleNode.row === start_node.row &&
                     singleNode.col === start_node.col
                  }
                  end_node={
                     singleNode.row === end_node.row &&
                     singleNode.col === end_node.col
                  }
               />
            );
         })}
      </div>
   );
};

export default Grid;
