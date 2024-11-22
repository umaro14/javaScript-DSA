

//NUMBER OF ILAND
//In the context of the "Number of Islands" problem, an island is defined as a connected group of land cells that are surrounded by water.
//These land cells are connected either horizontally or vertically (up, down, left, or right) but not diagonally.
//Water is represented by '0', and land is represented by '1' in the grid.


const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

function numIslands(grid){
  if(!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let numOfIslands = 0;

  // depth first search
  function dfs(i, j){
    if(i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0"){
      return;
    }
    
    grid[i][j] = "0";

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);


  }


  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if(grid[i][j] === "1")
      numOfIslands ++;
      dfs(i, j);
    }
  }

  return numOfIslands;
}
console.log(numIslands(grid));
