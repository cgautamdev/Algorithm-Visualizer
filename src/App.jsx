import React from "react";
import Grid from "./Components/Grid/Grid.jsx";
import Controls from "./Components/Controls/Controls.jsx";

const App = () => {
   let row = 10;
   let col = 10;

   // nodes - start and end
   const start_node = { row: 2, col: 2 };
   const end_node = { row: 8, col: 8 };
   return (
      <>
         <Controls />
         <Grid
            rows={row}
            cols={col}
            start_node={start_node}
            end_node={end_node}
         />
      </>
   );
};

export default App;
