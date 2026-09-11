import React, { useState } from "react";
import Grid from "./component/Grid/Grid";
import Controls from "./component/Controls/Controls";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

const App = () => {
   // this is for the initial grid
   const rows = 20;
   const [cols, setCols] = useState(20);

   // initially we are assigning default start and end node
   const start_node = { row: 10, col: 3 };
   const end_node = { row: 8, col: 15 };

   const [visitedNodes, setVisitedNodes] = useState([]);
   const [shortestPath, setShortestPath] = useState([]);
   const [activeNode, setActiveNode] = useState(null);
   return (
      <>
         <Navbar></Navbar>
         <Controls
            rows={rows}
            cols={cols}
            start_node={start_node}
            end_node={end_node}
            setVisitedNodes={setVisitedNodes}
            setShortestPath={setShortestPath}
            setActiveNode={setActiveNode}
            setCols={setCols}
         />

         <Grid
            rows={rows}
            cols={cols}
            start_node={start_node}
            end_node={end_node}
            visitedNodes={visitedNodes}
            shortestPath={shortestPath}
            activeNode={activeNode}
         />
         <Footer></Footer>
      </>
   );
};

export default App;
