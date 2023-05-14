/*

Day2 - Q: 1 : Create a function that takes an array of numbers and returns an array of objects.
 Each object should have a key called number with the original number, a key called isEven with a 
 boolean value indicating whether the number is even, and a key called double with double the value of the number.



*/

// Output:e
[
  { numbr: 1, isEven: false, double: 2 },
  { number: 2, isEven: true, double: 4 },
  // ... (rest of the numbers)
];

function createNumberObjects(arr) {
  let arrObject = [];
  for (let i = 0; i < arr.length; i++) {
    let Object = {
      number: arr[i],
      isEven: arr[i] % 2 === 0 ? true : false,
      double: arr[i] * 2,
    };

    arrObject.push(Object);
  }
  console.log(arrObject);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

createNumberObjects(numbers);

const students = [
  // ... (Your array of students with their information)
  {
    name: "Alice",
    age: 25,
    grades: [90, 80, 95],
    hobbies: ["reading", "gaming"],
  },
  {
    name: "Javed",
    age: 17,
    grades: [65, 40, 75],
    hobbies: ["gaming", "painting"],
  },
  {
    name: "Arman",
    age: 25,
    grades: [90, 85, 65],
    hobbies: ["reading", "sports"],
  },
];

function findTopStudents(arr, marks) {
  //   let topper = [];

  let topper = arr.filter((student) => {
    return student.grades.some((el) => el >= marks);
  });

  console.log(topper);
}

function addHobby(arr, name, hobbies) {
  let findArr = arr.find((el) => el.name === name);

  findArr.hobbies.push(hobbies);
  console.log(findArr);
}
// Example usage:

findTopStudents(students, 85);
// Output: Returns an array of students with an average grade greater than 85

addHobby(students, "Alice", "painting");
// Output: Adds 'painting' to the hobbies array of the student with name 'Alice'

function updateStudent(arr, name, updatedata) {
  let findArr = arr.find((el) => el.name === name);
  findArr.age = updatedata.age;
  findArr.grades = updatedata.grades;
  findArr.hobbies = updatedata.hobbies;

  console.log(findArr, "Update data");
}

updateStudent(students, "Alice", {
  age: 20,
  grades: [45, 56, 76],
  hobbies: ["reading", "painting"],
});
