
//PROBLEM 1: HAS PATH
//THE GRAPH IS A DIRECTED GRAPH AND ACYCLIC = NO CYCLES
//RETURN TRUE OR FALSE WHETHER WE CAN TRAVEL FROM THE SOURCE NODE TO THE DESTINATION NODE


//DFS ITERATE mine 

function hasPath(graph, source, destination){
    const stack = [ source ];
    
    while(stack.length > 0){
        let current = stack.pop();
        if(source === destination) return true;
        if(current === destination) return true;
    
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }

    return false;
}


const graph = {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k: [],
}

console.log(hasPath(graph, "f", "h"));




//ALVIN SOLUTION deapth first search recursively

const hasPathDfs = (graph, src, dst) =>{
  if(src === dst) return true;
  
  for(let neighbor of graph[src]){
    if(hasPathBfs(graph, src, dst) === true) return true;
  }

  return falsep;
}

console.log(hasPathDfs(graph, "f", "h"))


//Now it has to be iteratively with QUEUE
//we cannot do bfs recursively

const hasPathBfs = (graph, src, dst) =>{
  const queue = [  source ];
  
  while(queue.length > 0){
    let current = queue.shift();
    if(current === destination) return true;

    for(let neighnours of graph[src]){
    queue.push(neighnours);
   }
  }
 

  return false;
}

console.log(hasPathBfs(graph, "f", "h"))


//number of islands

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

function numberOfIsland(grid){

    if(!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let numberIsalnd = 0;

    function dfs(i, j){
        if(i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0"){
            return;
        }

        grid[i][j] = "0"
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }



    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === "1"){
                numberIsalnd ++;
                dfs(i, j)
            }
        }
    }

    return numberIsalnd;
}

console.log(numberOfIsland(grid));