const dfs = (rows, cols, start_node, end_node) => {
   const stack = [start_node];
   const visited = new Set();
   const visitOrder = [];
   const parent = new Map();

   while (stack.length > 0) {
      const current = stack.pop();
      const currentKey = `${current.row},${current.col}`;

      // skip a visited node
      if (visited.has(currentKey)) continue;

      visited.add(currentKey);
      visitOrder.push(current);

      // break the loop when the algorithm reaches the end node
      if (current.row === end_node.row && current.col === end_node.col) {
         break;
      }

      const neighbours = [
         { row: current.row - 1, col: current.col }, // up
         { row: current.row, col: current.col + 1 }, // right
         { row: current.row + 1, col: current.col }, // down
         { row: current.row, col: current.col - 1 }, // left
      ];

      for (const neighbour of neighbours) {
         const { row, col } = neighbour;

         // just make sure that the neighbors exists
         if (row < 0 || row >= rows || col < 0 || col >= cols) {
            continue;
         }

         // the key of each node is (row id, col id)
         const key = `${row},${col}`;
         // if already visited just skip it
         if (visited.has(key)) continue;

         parent.set(key, current);
         stack.push(neighbour);
      }
   }

   const shortestPath = [];
   let current = end_node;

   while (current) {
      shortestPath.push(current);

      // stop the loop if the current reaches the start node
      if (current.row === start_node.row && current.col === start_node.col) {
         break;
      }

      const key = `${current.row},${current.col}`;
      current = parent.get(key);
   }

   shortestPath.reverse();
   return { visitOrder, shortestPath };
};

export default dfs;
