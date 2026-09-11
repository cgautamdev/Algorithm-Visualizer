import Node from "../Node/Node";
import "./Grid.css";
import { NODE_TYPES } from "../../constants/NodeTypes";

const Grid = ({
   rows,
   cols,
   start_node,
   end_node,
   visitedNodes,
   shortestPath,
}) => {
   return (
      // default grid
      <div className="grid" style={{ "--cols": cols }}>
         {Array.from({ length: rows * cols }).map((_, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;

            let type = NODE_TYPES.UNVISITED; // default node

            if (row === start_node.row && col === start_node.col) {
               type = NODE_TYPES.START;
            } else if (row === end_node.row && col === end_node.col) {
               type = NODE_TYPES.END;
            } else if (
               shortestPath.some((node) => node.row === row && node.col === col)
            ) {
               type = NODE_TYPES.SHORTEST_PATH;
            } else if (
               visitedNodes.some((node) => node.row === row && node.col === col)
            ) {
               type = NODE_TYPES.VISITED;
            }

            return (
               <Node
                  key={index}
                  type={type}
                  isRightEdge={col === cols - 1}
                  isBottomEdge={row === rows - 1}
               />
            );
         })}
      </div>
   );
};

export default Grid;
