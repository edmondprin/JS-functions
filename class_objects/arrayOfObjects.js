const students = [
    { name: "Alice", age: 23 },
    { name: "John", age: 19 },
    { name: "Emily", age: 20 }
];

console.log(students[1].age);

students[2].name = "Marie";
console.log(students[2].name)

for (let i=0; i<students.length; i++) {
    console.log(students[i].name);
}

students.forEach((student) => {
    console.log(student.age);
})

students.forEach(function(student) {
    console.log(student.name);
})

students.push( { name: "David", age: 20 });
console.log(students);

const removedStudent = students.pop();
console.log(students);

const adults = students.filter(student => student.age >= 23);
console.log("Adults", adults);

const studenttNames = students.map(student => student.name);
console.log(`names: ${studenttNames}`); 

const student2 = students.find(student => student.name === "Alice");
console.log(student2.age); 

const myObjects = [

 {
    name: 'John',
    age: 25,
    hobbies: ['Reading', 'Traveling'],
    address: {
        street: '123 Main Street St',
        city: 'New York',
        zip: '10001',
    }
},

// console.log(firstObject);
// console.log(firstObject.name);
// console.log(firstObject.hobbies[0]);

 {
    nsme: 'Alice',
    age: 30,
    skills: ['JavaScript', 'React', 'Node.js'],
    projects: [
        {title: 'Project A', completed: true },
        {title: 'Project B', completed: false },
    ]
},

{
    title: 'Special Object',
    data: [1, 2, 3],
    metadata: {key: 'value' },
},

{
 // zEmpty Object
},

{
    anotherObject: true,
    nestedArrays: [
        [1, 2, 3],
        ['a', 'b', 'c']
    ],
    additionalProperty: 'Extra'
}

]
console.log(myObjects[0].name);
console.log(myObjects[1].projects[1].title);
console.log(myObjects[2].metadata.key);
console.log(myObjects[4].anotherObject);