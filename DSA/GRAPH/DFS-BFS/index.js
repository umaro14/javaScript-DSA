
//DEAPTH FIRST SEARCH USING STACK

const dfs = (graph, source) => {
  const stack = [ source ];

  while( stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for(let neighbour of graph[current]){
      stack.push(neighbour);
    }
  }
}


  const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
  }

dfs(graph, "a");

// or with i index

/*const dfs = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    const neighbors = graph[current];
    for (let i = 0; i < neighbors.length; i++) {
      stack.push(neighbors[i]);
    }
  }
};*/





//USING RECURSION ON DFS

console.log("...........RECURSION.............")


const dfs1 = (graph1, source1) => {
  console.log(source1);
 for(let neighbour1 of  graph1[source1]){
  dfs1(graph, neighbour1);
 }
}


  const graph1 = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
  }

dfs1(graph1, "a");



//BREADTH FIRST SEARCH USING QUEUE

console.log("...........BREADTH FIRST SEARCH.............");

 const bfs = (graph2, source2) => {
  const queue = [ source2 ];
  while(queue.length > 0){
    const current =  queue.shift();
    console.log(current);

    for(const neighbours of graph2[current]){
      queue.push(neighbours)
    }
  }
 }


 const graph2 = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

bfs(graph2, "a");