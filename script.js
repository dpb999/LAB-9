//Question 1

let characters=["Harry", "Hermione", "Ron", "Draco","Luna" ]

for(let i=1; i<=1; i++){
    console.log("Harry")
    console.log("Hermione")
    console.log("Ron")
    console.log("Draco")
    console.log("Luna")
}

//Question 2

let firstname="Harry"
let house="Grtffindor"

console.log("Welcome, Harry of Gryffindor!");

//Question 3

let charactername="Hermione"

console.log(charactername.toUpperCase());
console.log(charactername.toLowerCase());

//Question 4

let spell="expelliarums"
let trimmedspell=spell.trim();

console.log(trimmedspell);

//Question 5

let quote="I solemnly swear that I am up to no good";
let extractedWord=quote.slice(14,19);

console.log(extractedWord);

//Question 6

let firstName="Ron";
let lastName="Weasley";
let fullName=firstName.concat("Question 6",lastName);

console.log(fullName);

//Question 7

let sentence="Draco is a good wizard"
let sentences=sentence.replace("good","bad")

//Question 8

let houses=["Gryffindor","Hufflepuff","Ravenclaw"]
houses.pop();

console.log("Question 8",houses);

//Question 9

let spells=["Alohomora","Lumos","Nox"];
spells.unshift("Accio");
spells.shift();

console.log("Question 9",spells);

//Question 10

let professors=["Dumbledore","McGonagall","Snape","Hagrid"];
let selectedProfessors = professors.slice(1,3);

console.log("Question 10",selectedProfessors);

//Question 11

let students=["Neville","Seamus","Dean","Parvati"];
students.splice(1,2);

console.log("Questioin 11",students);

//Question 12

let phrase="Mischief Managed";
let result=phrase.trim().toLowerCase()+"-Harry";

console.log("Question 12",result);

//Question 13
//Question 14