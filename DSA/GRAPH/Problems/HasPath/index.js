
//PROBLEM 1: HAS PATH
//THE GRAPH IS A DIRECTED GRAPH AND ACYCLIC = NO CYCLES
//RETURN TRUE OR FALSE WHETHER WE CAN TRAVEL FROM THE SOURCE NODE TO THE DESTINATION NODE

//my solution

const dfs = (graph, source, destination) => {
    const stack = [ source ];
    while(stack.length > 0){
        const current = stack.pop();
        if(current === destination){
            return true;
        } 

        if(source === destination){
            return true;
        }

        for(let neighnours of graph[current]){
            stack.push(neighnours);
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

console.log(dfs(graph, "f", "h"));


//ALVIN SOLUTION deapth first search recursively

const hasPathDfs = (graph, src, dst) =>{
    if(src === dst) return true;

    for(let neighbor of graph[src]){
        if(hasPathDfs(graph, neighbor, dst) === true){
            return true;
        }
    }
    return false;
}

console.log(hasPathDfs(graph, "f", "h"))


////ALVIN SOLUTION breadth first search, Now it has to be iteratively 
//we cannot do bfs recursively

const hasPathBfs = (graph, src, dst) =>{
   const queue = [ src ];

   while(queue.length > 0){
        const current = queue.shift();
        if(current === dst) return true;
        for(let neighbor of graph[src]){
            queue.push(neighbor)
        }
   }
   return false;
}

console.log(hasPathBfs(graph, "f", "h"))


