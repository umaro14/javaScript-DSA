

//undirect path both direction
// we have cycle here of 3 nodes,between i, j and k
const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
];

//sets dont have duplicates

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    console.log(graph)
    return hasPath(graph, nodeA,nodeB, new Set()); //the set will be recieve the visited nodes
}


//traversing the graph and guarding against an infinit loop
const  hasPath = (graph, source, destination, visited) => {
    if(visited.has(source)) return false; //to avoid the cycle we will check if the current node has already been visited

    //if the node has been visited it will be added inside the set
    visited.add(source);
     if(source === destination) return true;

     //source and neighbor are definitly connected, so if the neighbor 
     //and destination are connected, that means source also has path to the destination
     for(let neighbor of graph[source]){
        if(hasPath(graph, neighbor, destination, visited) === true){  //the source now changes to its neigbor but the destination always stays the same
            return true;
        }
     }

     return false;
};

//converting an edge list into an adjacency list
const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges){
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

undirectedPath(edges, "j", "k");
