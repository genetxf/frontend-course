/*
Today's Topic

- Array
    - arr[0]
    - length
    - push
    - pop
    - shift
    - unshift
    - indexOf
    - include
    - slice


- Template String 
        let message = "Hello " + name + ", welcome!";
        let message = `Hello ${name}, welcome!`;


*/

const alviMark = 100;
const munnaMark = 99;
const sakibMark = 80;

// let marks = [100, 99, 80, 10];
// access marks[3]

// console.log(marks.length);

// console.log(marks);

// marks.push("Learning Arr")
// marks.pop()
// console.log(marks.pop());
// console.log(marks);

// marks.unshift(33)
// marks.shift()
// console.log(marks);

// let marks = [100, 99, 80, 10];

// console.log("Mark: ", marks[1]);
// console.log("Mark: ", marks[2]);
// console.log("Mark: ", marks[3]);

// for (let i = 0; i < marks.length; i++) {
//     console.log("Mark: ", marks[i]);
// }

// const even = [];

// for (let i = 2; i <= 20; i+=2) {
//     even.push(i);
// }

// console.log(even);

// const nums = [12, 2, 34, 123, 1];

// console.log(nums.indexOf(11));  -1 => false

// function: arr, value => true or false
// = >

// const itHas = (arr, value) => {
//   const indexNumber = arr.indexOf(value); // 1,2,3 | -1
//   if (indexNumber == -1) {
//     return false;
//   } else {
//     return true;
//   }
// }
//  const nums = [12, 2, 34, 123, 1];

// // console.log(itHas(nums, 11));
// console.log(nums.includes(11));

// const nums = [12, 2, 34, 123, 1, 22, 33, 44];

// console.log(nums[nums.length - 1]);

// console.log(nums.slice(4, nums.length));
// console.log(nums);

// console.log(nums[1], nums[2])

// // 1,2,3 => return [12,321,434]
// input: array, index numbers => [11,22,33]

// const getValues = (arr, indexs) => {
//   const result = [];
//     for (let i = 0; i < indexs.length; i++) {
//         const randomIndexNumber = indexs[i];
//         const value = arr[randomIndexNumber];
//         result.push(value)
//     }
//     return result;
// };

// const arr = [11, 22, 33, 44, 55];
// const indexs = [1, 3];

// const result = getValues(arr, indexs);
// console.log(result);

// return => [22,44]
/*
  const arr = [11,22,33,44,55]
 
  
  const result = [22, 44];

  1
  arr[1] => 22
  result.push(22)

  3
  arr[3] => 44
  result.push(44)

  return result;

*/
// const indexs = [11, 3];

//  for (let i = 0; i < indexs.length; i++) {
//    console.log(indexs[i]);
//  }



// const username = "Imran"


// console.log("Good morning, " , username);

// console.log(`Good ${username} morning, `);

// function sum(a, b) { 

//     return `Result = ${a + b}`;
// }

// console.log(sum(10,5));
