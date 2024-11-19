

function maxChar(str){
    const myMap = {}
    let max = 0;
    let maxChar = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(myMap[char]){
            myMap[char] += 1;
        }
        else {
            myMap[char] = 1;
        }
    }
    

    for(let key in myMap){
        if(myMap[key] > max){
            max = myMap[key]
            maxChar =key;
        }
    }

    return maxChar;
}

console.log(maxChar("oirethgoieriu"));

//chunk

function chunk(array, size){
    let result = [];
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index, index+size));
        index += size;
    }

    return result;
}

console.log(chunk([1,2,3,4,5,6,7,8,9,8,7,6], 3))

//capitalise
function capitalise(str4){
    const words = str4.split(' ');
    const result = [];
    for(let i = 0; i < words.length; i++){
        result.push(words[i][0].toUpperCase() + words[i].slice(1));
    }

    return result.join(' ')
}


console.log(capitalise('my name is umaro balde'))
