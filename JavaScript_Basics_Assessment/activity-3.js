
  /*  Start off by creating an array with three student names.
    Create a loop that will prompt the user for three more names.
    After every user input, store the new name into the array.
    Create a new loop that will iterate through the array and console log each element of the array.
*/
const student_names = ['Greg', 'Olivia', 'Tim'];

for(let i=0; i < 3; i++){
    let temp = prompt('enter name');
    student_names.push(temp)
}

for(let i=0; i < 6; i++){
    console.log(student_names[i]);
}
