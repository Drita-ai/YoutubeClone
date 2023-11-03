async function f1() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const json = await response.json();
  console.log(json);
}

f1();

// Function Calling
functionName();

// Array Declaration
let arrayName = [1, 2, 3, 4];
const array_name = [1, "a", "abc", 5];

// Object Declaration
const objectName = { propertyName: value };
let object_name = { propertyName: anotherValue };

// Example
const student1 = {
  name: "Shubham",
  roll_number: 95,
};
