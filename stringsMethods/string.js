const sentence = "     suPer fANcy toy   ";
console.log(sentence.length);

const sentence2 = sentence.trim().toLowerCase();
console.log(sentence2, sentence2.length);

console.log(sentence2[1]);
console.log(sentence2.includes("toy"));
console.log(sentence2.indexOf("fancy"));
console.log(sentence2.substring(0,5));
console.log(sentence2.slice(7));
console.log(sentence2.substr(7,5));

const sentence3 = sentence2.replace("toy", "cat");
console.log(sentence3);

const csvData = "Alice,25,New York;Bob,30,LosAngeles;Charlie,28,Chicago";
const peopleArray = csvData.split(';');
console.log(peopleArray);
