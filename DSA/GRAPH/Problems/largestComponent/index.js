

//LONGEST COMPONENT
// componen 1: has [5,0,8,1] all connected undirectedly, size 4
// componen 2: has [4,2,3]   all connected undirectedly, size 3
//answer: 4


const graph = {
    0: [8, 1, 5],                            
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2 ],
}
    

const longestComponent = (graph) => {
    let longest = 0;
    const visited = new Set();

    for(let node in graph){
        const size = explore(graph, node,visited);
        if(size > longest) longest = size;
    }
    return longest;
}

const explore = (graph, node, visited) => {
    if(visited.has(node)) return 0;
    visited.add(node)
    let size = 1; //represent the current node we are at right now

    for(let neighbor of graph[node]){
        size += explore(graph, neighbor, visited);  //whatever number we get fom the explore recusive we wanna add it to the size
    }

    return size;
}

longestComponent(
   graph, 1, 1
)