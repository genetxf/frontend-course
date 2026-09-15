const student = {
    name: "Humaira",
    hone: "0182882781",
    roll: 10,
    mark: 5,
}

const product = {
  title: "I phone 15",
  price: 50000,
  description:"This is IPhone 15"
};

// console.log(product.title);
// console.log(product["title"]);

// console.log(product);
// product.price = 40000;

// console.log(product);

// delete product.description

// console.log(product);


// console.log(product.hasOwnProperty("title"));

// console.log(Object.keys(product));

// console.log(Object.values(product));

// const user = {
//     name: "Imran Hossen",
//     phone: "01723838218",
//     email: "imran.edutechs@gmail.com",
//     role: "admin",
//     lastLoggedInDate: "1/1/2026",
//     status: "active",
//     isBan: false,
// }

// for (const key in user) {
//     console.log(key, user[key]);
// }

// const signal = {
//     id: 1,
//     title: "This is title",
//     target: 100,
//     current: 50,
//     creator: {
//         name: "Munna",
//         avatar_url: "https://fjdkfjd.com/fdsf",
//         title:"Future Frontend Engineer"
//     }
// }

// signal.creator.name= 'Foyez'

// console.log(signal.creator.name);


// const std1 = { roll: 100, name: " Foyze", course: "Frontend Development" };
// const std2 = { roll: 101, name: " Humaira", course: "Frontend Development" };
// const std3 = { roll: 101, name: " Munna", course: "Frontend Development" };

const students_list = [
  { roll: 100, name: "Foyze", course: "Frontend Development", mark: 20 },
  { roll: 101, name: "Humaira", course: "Frontend Development", mark: 10 },
  { roll: 102, name: "Munna", course: "Frontend Development", mark: 20 },
];

const std1 = students_list[0].mark
const std2 = students_list[1].mark
const std3 = students_list[2].mark

// const std3 = students_list[2].mark
const total_mark = std1 + std2 + std3;

// console.log(std1.mark);
// console.log(total_mark);

const username = "Alvi"
const newStd = {
  roll: 100 + students_list.length,
  name: username,
  course: "Frontend Development",
  mark: 0,
};
students_list.push(newStd);

// let total = 0;
// for (let i = 0; i < students_list.length; i++) {
//     const std_mark = students_list[i]["mark"];
//     total = std_mark + total;
// }

// console.log(students_list);



/*
    input: array
    output: array
    if(std_mark == 10) then remove this student
*/

// function remove_std(stds) { 
//     const result = [];
//     for (let i = 0; i < stds.length; i++) {
//         const item = stds[i];
//       if (item.mark != 10) {
//         result.push(item)
//       }
//     }
//     return result;
// }

// console.log(remove_std(students_list));
