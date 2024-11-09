

class MyArray {


    constructor(){
        this.length = 0;
        this.data = {};
    }

//In this.data[this.length] = item;, the expression this.length (which is a number)
//dynamically determines the property name (or "key") in the data object where the item
//will be stored. whatever goes inside the [] will set as the name or key of the value
   push(item){
    this.data[this.length] = item;
    this.length ++;
    return this.length;
    //console.log(this.data[this.length]); //output apple
   }

   get(index){
    return this.data[index];
   }
}

const myArray = new MyArray();
myArray.push("apple");
myArray.push("orange");
myArray.push("banana");
myArray.push("mango");
console.log(myArray); //output {0: "apple", 1: "orange", 2: "banana", 3: "mango" length: 4

console.log(myArray.get(2))

