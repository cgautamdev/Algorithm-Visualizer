import React from "react";
import "./Grid.css";
import Node from "../Node/Node";
import NodeTypes from "../Node/NodeTypes";

const Grid = ({ rows, cols, start_node, end_node }) => {
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

   return (
      <div className="grid-container" style={{ "--grid-cols": cols }}>
         {nodes.map((singleNode) => {
            const nodeId = `node-${singleNode.row}-${singleNode.col}`;

            // ----- Node type logic
            let nodeType = "";
            if (
               singleNode.row === start_node.row &&
               singleNode.col === start_node.col
            ) {
               nodeType = NodeTypes.START_NODE;
            } else if (
               singleNode.row === end_node.row &&
               singleNode.col === end_node.col
            ) {
               nodeType = NodeTypes.END_NODE;
            } else {
               nodeType = NodeTypes.UNVISITED;
            }
            // ----- Node type logic ends here

            return (
               <Node
                  key={nodeId}
                  id={nodeId}
                  type={nodeType}
                  isBottomEdge={singleNode.row === rows - 1}
                  isRightEdge={singleNode.col === cols - 1}
               />
            );
         })}
      </div>
   );
};

export default Grid;
