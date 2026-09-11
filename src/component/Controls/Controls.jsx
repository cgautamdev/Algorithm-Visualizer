import React, { useRef, useState } from "react";
import "./Controls.css";
import bfs from "../../algorithms/bfs";
import dfs from "../../algorithms/dfs";

const Controls = ({
   rows,
   cols,
   start_node,
   end_node,
   setVisitedNodes,
   setShortestPath,
   setActiveNode,
   setCols,
}) => {
   const [algorithm, setAlgorithm] = useState("bfs");
   const [speed, setSpeed] = useState(100);
   const timersRef = useRef([]);
   const [isLocked, setIsLocked] = useState(false);

   const clearAnimation = () => {
      timersRef.current.forEach((timer) => {
         clearTimeout(timer);
      });

      timersRef.current = [];

      setVisitedNodes([]);
      setShortestPath([]);
      setActiveNode(null);
   };

   const handleClear = () => {
      clearAnimation();
      setIsLocked(false);
   };

   const handleVisualise = () => {
      clearAnimation();
      setIsLocked(true);

      let visitOrder, shortestPath;

      if (algorithm === "bfs") {
         ({ visitOrder, shortestPath } = bfs(rows, cols, start_node, end_node));
      } else if (algorithm === "dfs") {
         ({ visitOrder, shortestPath } = dfs(rows, cols, start_node, end_node));
      }

      // Animate visited nodes
      visitOrder.forEach((node, index) => {
         const timer = setTimeout(() => {
            setActiveNode(node);
            setVisitedNodes((prev) => [...prev, node]);
         }, index * speed);

         timersRef.current.push(timer);
      });

      // animating active node
      const pathStartTime = visitOrder.length * speed;

      shortestPath.forEach((node, index) => {
         const timer = setTimeout(
            () => {
               setActiveNode(null);

               setShortestPath((prev) => [...prev, node]);
            },
            pathStartTime + index * speed,
         );

         timersRef.current.push(timer);
      });
   };

   return (
      <div className="controls">
         <div className="control-group">
            <label htmlFor="algo-select">Algorithm</label>

            <select
               id="algo-select"
               value={algorithm}
               onChange={(e) => setAlgorithm(e.target.value)}
            >
               <option value="bfs">Breadth-first search</option>
               <option value="dfs">Depth-first search</option>
               <option value="dijkstra">Dijkstra</option>
               <option value="astar">A*</option>
            </select>
         </div>

         <div className="control-group">
            <label htmlFor="speed-select">Speed</label>

            <select
               id="speed-select"
               value={speed}
               onChange={(e) => setSpeed(Number(e.target.value))}
            >
               <option value="200">Slow</option>
               <option value="100">Medium</option>
               <option value="30">Fast</option>
            </select>
         </div>

         <div className="control-group slider-group">
            <label htmlFor="cols-slider">
               Columns <span>{cols}</span>
            </label>

            <input
               id="cols-slider"
               type="range"
               min="20"
               max="50"
               value={cols}
               disabled={isLocked}
               onChange={(e) => setCols(Number(e.target.value))}
            />
         </div>

         <div className="button-group">
            <button className="visualize-btn" onClick={handleVisualise}>
               Visualize
            </button>

            <button className="clear-btn" onClick={handleClear}>
               Clear
            </button>
         </div>
      </div>
   );
};

export default Controls;
