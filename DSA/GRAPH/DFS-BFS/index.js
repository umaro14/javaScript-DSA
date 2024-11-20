

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