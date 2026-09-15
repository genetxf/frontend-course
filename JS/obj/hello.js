
// Create object
const user = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

const marks = [1,2,3,4]

// Read
console.log(user.name);
console.log(user["age"]);

// Add
user.email = "rahim@example.com";
user["phone"] = "01700000000";

// Update
user.age = 26;

// Delete
delete user.city;

// Check property exists
console.log("name" in user); // true
console.log(user.hasOwnProperty("age")); // true

// Get all keys
console.log(Object.keys(user));

// Get all values
console.log(Object.values(user));

// Get keys and values
console.log(Object.entries(user));

// Loop through object
for (const key in user) {
  console.log(key, user[key]);
}

// Loop using Object.entries
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// Copy object
const copiedUser = { ...user };

// Merge objects
const address = {
  country: "Bangladesh",
  district: "Dhaka"
};

const fullUser = {
  ...user,
  ...address
};

// Destructuring
const { name, age } = user;

console.log(name);
console.log(age);

// Rename while destructuring
const { name: userName } = user;

console.log(userName);

// Default value
const { salary = 0 } = user;

console.log(salary);

// Nested object
const employee = {
  name: "Karim",
  department: {
    name: "IT",
    floor: 3
  }
};

console.log(employee.department.name);

// Update nested property
employee.department.floor = 4;

// Optional chaining
console.log(employee.address?.city);

// Object comparison
const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // false

// Freeze object
const settings = Object.freeze({
  theme: "dark"
});

// Seal object
const product = Object.seal({
  name: "Laptop",
  price: 50000
});

product.price = 55000; // allowed
// product.brand = "Dell"; // not allowed

// Convert object to JSON
const json = JSON.stringify(user);

console.log(json);

// Convert JSON back to object
const parsedUser = JSON.parse(json);

console.log(parsedUser);

// Remove property using destructuring
const { age: removedAge, ...userWithoutAge } = user;

console.log(userWithoutAge);
