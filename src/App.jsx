import React from "react";
import Grid from "./Components/Grid/Grid.jsx";
import Controls from "./Components/Controls/Controls.jsx";

const App = () => {
   let row = 10;
   let col = 10;
   return (
      <>
         <Controls />
         <Grid rows={row} cols={col} />
      </>
   );
};

export default App;
