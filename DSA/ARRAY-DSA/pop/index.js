

class MyArray {


    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.length;
        //console.log(this.data[this.length]); //output apple
       }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    
    shift(){
        const firstItem = this.data[0];
        
        //re-indexing the element in the array
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1]
        this.length--;
        return firstItem;
    }

  
}

const myArray = new MyArray();
myArray.push("apple");
myArray.push("orange");
myArray.push("banana");
myArray.push("mango");


myArray.pop()

console.log(myArray);
console.log(myArray.shift()); 
console.log(myArray);




