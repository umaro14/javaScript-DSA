


// we cannot mesure time for using seconds or miliseconds
 const sumArray = (numbers) => {
    let sum = 0;

    for(let a = 0; a < numbers.length; a++){
        sum = numbers[a];
    }

    return sum;
}

const n = [5, 76, 40, 48, 24, 18, 62, 100, 99, 22, 95, 72, 91];

const startTime = new Date();
console.log(sumArray(n));
const endTime = new Date();

const elapsedTime = endTime -startTime;
console.log(`finishedin ${elapsedTime} ms.`)




// this O(n * 4) because the loop will run 4 times based on the length of the 
// n. 4 is the number of times we are calling the function. but we drop the 4 and
// just say O(n) because the loop is the dominant operation. The 4 is a constant.

const calculateAvarege = (numbers1) => {
    let sum1 = 0;

    for(let a = 0; a < numbers1.length; a++){
        let number = numbers1[a];
        sum1 += number;
    }

    return sum1 / numbers1.length;

}
 
console.log(calculateAvarege([1,2,3,4]));





//Time complexity example 1
//if you have nested loops you are doing multiplications
//the first loop is O(n) and the nested loop is O(n^2) ==> n + n^2 = O(n^2)

const foo = (n) => {
    for (let a = 0; a < n/2; a++) {
       console.log(n);
        
    }

    for (let b = 0; b < n; b++) {
        for (let c = 0; c < n; c++) {
          console.log(b + ", " + c);
            
        }
        
    }
}
console.log( foo(10))