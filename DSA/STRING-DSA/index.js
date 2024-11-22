
//reversing a string

function myReversed(str){
    let reversed = "";
    for(let i = 0; i < str.length; i++ ){
        reversed = str[i] + reversed
    }
    return reversed;
}

console.log(myReversed("umaro"));



//reversing an Interger
function reversInt(num){
    const reversedInteger = num.toString().split('').reverse().join('');
    return parseInt(reversedInteger) * Math.sign(num);
}

console.log(reversInt(-56));




//palindrome
function myReversed2(str2){
    const reversed2 = str2.split('').reverse().join('');
    return reversed2 === str2; 
}

console.log(myReversed2("madam"));



//Palindrome numbers
function isPalindrome(x) {
 
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let myInt = x.toString().split('').reverse().join('');

    return myInt === x.toString();
}

console.log(isPalindrome(121));   // Output: true






//maxChar==> most repeated character
function maxChar(str3){
    const myMap = {};
    let max = 0;
    let maxChar = '';
    for(let i = 0; i < str3.length; i++){
        const char = str3[i];
        if(myMap[char]){
            myMap[char] += 1;
        } else{
            myMap[char] = 1;
        }
    }

    //finding the max character 
    for(let key in myMap){
      if(myMap[key] > max){
        max = myMap[key]
        maxChar = key;
    }
    }
    
    return maxChar;
}

console.log(maxChar("abccsssssgff"));

//or

function maxChar1(str4){
    const charMap  = {};
    for(let char of str4){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1;
        }
        else{
            charMap[char] = 1;
        }
    }
    return charMap;
}

console.log(maxChar1("ioefgiooihevvv"));

//Array chunk, Ex:

function chunk(array, size){
    let result = [];
    let index = 0; 
    while(index < array.length){
        result.push(array.slice(index, index + size))
        index += size;
    }

    return result;
}

console.log(chunk([1, 2, 3, 4, 6, 5, 7, 8, 9], 4));



//Title case ==> capitalise first letter of each word
function capitalise(str4){
    const words = str4.split(' ');
    const result = [];
    for(let i = 0; i < words.length ; i++){
        result.push(words[i][0].toUpperCase() + words[i].slice(1)); //We then use .slice(1) to retrieve the rest of the word (from the second character onward) without changing it.
    }

    return result.join(' ');
};

console.log(capitalise('my name is umaro balde'))




//Anagram ==> is a string that another word can come from, Ex: 'RETAIL! SAFETY!, ==> fairy tails
/*/ and /: Delimit the regex pattern
//[\W]: Matches any non-word character.
//[]: The square brackets create a "character set,"
//g: The global flag ensures the replacement 
//is applied to all matches in the string, not just the first match.*/
function charMap1(word){
    const charMapB = {};
    word = word.toLowerCase().replace(/[\W]/g,'')  // W represent everything that is not a word; and replace it with '' space
    for(let i = 0; i < word.length; i++){
        const char1 = word[i];
        if(charMapB[char1]){
            ++charMapB[char1]
        } else{
            charMapB[char1] = 1
        }

        //charMapB[char1] = ++charMapB[char1] || 1;  //if char1 exists inside charMapA then increment it else is set to one
    }
    return charMapB;
}

function myAnagram(word1, word2){
    
    const charMapa = charMap1(word1)
    const charMapb = charMap1(word2);

    if(Object.keys(charMapa).length !== Object.keys(charMapb).length) return false;

    for(let key in charMapa){
        if(charMapa[key] !== charMapb[key]) return false;
        
    }
    return true;

}

console.log(myAnagram("arc", "car"));


function CHARMAP(WORD){
    const MYCHARMAP = {};
    WORD = WORD.toLowerCase().replace(/[\W]/g, '');
    for(let i = 0; i < WORD.length; i++){
        let CHAR = WORD[i];
        if(MYCHARMAP[CHAR]) ++MYCHARMAP[i] || 1;
    }

    return MYCHARMAP;
}

function Anagram(stringA, stringB){
    const strA = CHARMAP(stringA);
    const strB = CHARMAP(stringB);

    if(Object.keys(strA).length !== Object.keys(strB).length) return false;

    for(let key in strA){
        if(strA[key] !== strB[key]) return false;
        
    }
    return true;
}
console.log(Anagram("madam", "damma"));