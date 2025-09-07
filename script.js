// ==========================
// Part 1: Variable Declarations and Conditionals
// ==========================

let age = 20;
let isStudent = true;

if (age >= 18 && isStudent) {
    console.log("You are an adult student.");
} else if (age >= 18) {
    console.log("You are an adult but not a student.");
} else {
    console.log("You are a minor.");
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greet a user
function greet(name) {
    return Hello, ${name}! Welcome to the JavaScript assignment.;
}

// Function 2: Sum of two numbers
function sum(a, b) {
    return a + b;
}

// Testing the functions
console.log(greet("Vianney"));
console.log("Sum of 5 + 10 =", sum(5, 10));

// ==========================
// Part 3: Loop Examples
// ==========================

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log(For Loop Count: ${i});
}

// Loop 2: While loop
let j = 1;
while (j <= 3) {
    console.log(While Loop Count: ${j});
    j++;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// Interaction 1: Change text of a div
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("output").textContent = "The text has been changed!";
});

// Interaction 2: Add item to a list
document.getElementById("addItemBtn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = Item ${document.getElementById("itemList").children.length + 1};
    document.getElementById("itemList").appendChild(newItem);
});

// Interaction 3: Display input value
document.getElementById("displayInputBtn").addEventListener("click", function() {
    let inputValue = document.getElementById("inputText").value;
    document.getElementById("output").textContent = You typed: ${inputValue};
});