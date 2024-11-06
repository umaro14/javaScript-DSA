
//this would be a linear search an time complexity of O(n)

/*const students = ["paul", "sam", "jay", "sally", "Paul"];


function checking(allStudents, studentname){
    for(i = 0; i < students.length; i++){
        if(allStudents[i] === studentname){
            console.log("found: " + studentname + "at index " + i);
        }
    }
}

checking(students, "sam");*/


const students = ["paul", "sam", "jay", "sally", "Paul"];

function checking() {
   
    let value = document.getElementById("value").value;
    let student = document.getElementById("student");


    if( value === ""){
        alert("Please enter a name");
    }
   
    for (let i = 0; i < students.length; i++) {
        if (students[i] === value) {
            student.textContent = value;
            return; 
        }
    }
}
