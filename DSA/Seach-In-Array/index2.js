
//This is a O(1) or constant time complexity..becuase we provided the index of the element

const numbers = [1, 2, 3, 4, 5 ,6,];

const  getElemnet =(arr, index) => arr[index];
console.log(getElemnet(numbers, 2)); // Output: 3



//This is O(n^2)...this is an expensive one, the size of the n increases
//the number of the comparisons (n^2) grows much faster

function findPairs(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            console.log(`pair: ${array[i]}, ${array[j]}`);
    }
}
}

findPairs(numbers);



