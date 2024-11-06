
const students = ["paul", "sam", "jay", "sally", "Paul"];


function checking(allStudents, studentname){
    for(i = 0; i < students.length; i++){
        if(allStudents[i] === studentname){
            console.log("found: " + studentname + "at index " + i);
        }
    }
}

checking(students, "sam");
