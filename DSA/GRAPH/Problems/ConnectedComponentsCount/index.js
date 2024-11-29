
//Connect components count
//for example we will incremnet the count by one each time we find a connected component
//example: 
/*
     (1)---(2)
                        (4)
                        |
                        |
               (5)-----(6)-----(8)
                        |
                        |
         (3)           (7)

//The answer would be 3, because we have three differet components connected to each other

//IMPORTANT: VERY COMMON IN INTERVIEWS 

 */

const connectedComponentCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for(let node in graph){
        console.log(visited);
       if( explore(graph, node, visited) === true){
        count ++;
       }
    }
    return count;
};



//deapth first search traversal, recursive fucntion
const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return false; //String => cos key of an js object will always be converted to string, we use String to make it consitence keys and the data to be strings

    visited.add(String(current));

    for(let neighbor of graph[current]){
        explore(graph, neighbor,visited);
    }

    return true;
};

connectedComponentCount(
    {
        0: [8, 1, 5],
        1: [0],
        5: [0, 8],
        8: [0, 5],
        2: [3, 4],
        3: [2, 4],
        4: [3, 2],
    }
);

//MY EXERCICISE 
const connectedComp = (graph) =>{
    const visited = new Set();
    let count = 0;

    for(let node in graph){
        console.log(visited);
        if(explore(graph, node, visited) === true){
            count ++;
        }
    }
  return count;
}

const explore1 = (graph, current, visited) => {
   if(visited.has(String(current))) return false;
   visited.add(current);

   for(let neighbor1 of graph[current]){
    explore(graph, neighbor1, visited);
   }
   return true;
}
