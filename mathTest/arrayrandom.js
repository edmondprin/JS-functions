const numbers = [`${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)} = ${''}`];
console.log(numbers);

const numbers2 = [];
for (let i = 0; i < 11; i++) {
    numbers2[i] = Math.floor(Math.random()*45);
};
console.log("Numbers2:", numbers2);

const numbers3 = [];
for (let j = 0; j < 11; j++) {
    numbers3[j] = Math.floor(Math.random()*150);
};
console.log("Numbers3:", numbers3);

const numbers4 = numbers2.concat(numbers3);
console.log("Numbers4:", numbers4);

const span = document.createElement('span');
const div = document.getElementById("container");

function generateList() {
    for (let x = 0; x < numbers2.length; x++) {
        const exo = `<p>${numbers2[x]} + ${numbers3[x]} = ${span[x]}</p>`;
}
}

/*
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age}: ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};


// Create the input element
const input = document.createElement("input");

// Set the type attribute (e.g., text, number, etc.)
input.setAttribute("type", "text");

// Set other attributes if needed (e.g., id, placeholder, etc.)
input.setAttribute("id", "myInput");
input.setAttribute("placeholder", "Enter your text here");

// Add the input element to the DOM
document.body.appendChild(input); 

*/