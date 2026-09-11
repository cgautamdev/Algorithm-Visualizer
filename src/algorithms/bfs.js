const bfs = (rows, cols, start_node, end_node) => {
   const queue = [start_node];
   const visited = new Set();
   const visitOrder = []; // for animation later

   const parent = new Map(); // to determine the shortest path later

   visited.add(`${start_node.row},${start_node.col}`);
   visitOrder.push(start_node);

   while (queue.length > 0) {
      const current = queue.shift();

      // break the loop when the algorithm reaches the end node
      if (current.row === end_node.row && current.col === end_node.col) {
         break;
      }

      const neighbours = [
         { row: current.row - 1, col: current.col }, // up
         { row: current.row, col: current.col - 1 }, // left
         { row: current.row + 1, col: current.col }, // down
         { row: current.row, col: current.col + 1 }, // right
      ];

      for (const neighbour of neighbours) {
         const { row, col } = neighbour;

         // just make sure that the neighbors exists
         if (row < 0 || row >= rows || col < 0 || col >= cols) {
            continue;
         }

         // the key of each node is (row id, col id)
         const key = `${row},${col}`;

         // if the node is already visited then skip it
         if (visited.has(key)) {
            continue;
         }

         visited.add(key);
         parent.set(key, current);
         queue.push(neighbour);
         visitOrder.push(neighbour);
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

   // currently the array starts from the end node to the start node.
   // we reverse it to start from the start node
   shortestPath.reverse();
   return { visitOrder, shortestPath };
};

export default bfs;
