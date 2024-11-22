
//This problrm crastes subarrays with average of the sum of the element with a length of k,

//ex: ([1,2,3,4,5],3), the 3 is the k... ==> [(1,2,3) / 3 = 2, (2,3,4) / 3 = 3, (3,4,5) / 4]
                                             


function avg_sub_arrays_naive(arr, k){
    const averages = [];

    for(let i = 0; i <= arr.length - k; i++){
        let sum = 0;
        for(let j = 0; j < k; j++){
           sum += arr[i + j];
    }
    averages.push(sum / k)
}
  return averages;
}

console.log(avg_sub_arrays_naive([1,2,3,4,5],3))