import React, { useRef, useState } from "react";
import "./Controls.css";
import bfs from "../../algorithms/bfs";

const Controls = ({
   rows,
   cols,
   start_node,
   end_node,
   setVisitedNodes,
   setShortestPath,
   setCols,
}) => {
   const [algorithm, setAlgorithm] = useState("bfs");
   const [speed, setSpeed] = useState(100);
   const timersRef = useRef([]);

   const clearAnimation = () => {
      timersRef.current.forEach((timer) => {
         clearTimeout(timer);
      });

      timersRef.current = [];
      setVisitedNodes([]);
      setShortestPath([]);
   };

   const handleClear = () => {
      clearAnimation();
   };

   const handleVisualise = () => {
      clearAnimation();

      let visitOrder, shortestPath;

      if (algorithm === "bfs") {
         ({ visitOrder, shortestPath } = bfs(rows, cols, start_node, end_node));
      }

      visitOrder.forEach((node, index) => {
         const timer = setTimeout(() => {
            setVisitedNodes((prev) => [...prev, node]);
         }, index * speed);

         timersRef.current.push(timer);
      });

      const pathTimer = setTimeout(() => {
         setShortestPath(shortestPath);
      }, visitOrder.length * speed);

      timersRef.current.push(pathTimer);
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
