//Question 1
let characters = ["Harry", "Hermione", "Ron", "Draco", "Luna"]

for(let i=1; i<=1; i++){
    console.log("Harry")
    console.log("Hermione")
    console.log("Ron")
    console.log("Draco")
    console.log("Luna")
}
//Question 2
let firstName = "Harry";
let house = "Gryffindor"
let greeting = `Welcome, ${firstName} of ${house}!`;
console.log(greeting)

//Question 3
let charactername = "Hermione"
console.log("UpperCase():", charactername.toLowerCase());
console.log("LowerCase():", charactername.toUpperCase());

//Question 4
let spell = 'Expelliarmus';
let trimmedspell=spell.trim()
console.log(trimmedspell);

//Question 5
let quote = 'I solemnly swear that I am up to no good';
console.log("slice(11, 17):", quote.slice(11, 17));

//Question 6
let firstName1 = 'Ron'
let lastName = 'Weasly';
console.log("Full name:", firstName1.concat(" ", lastName));

//Question 7
let sentence = 'Drace is a good wizard';
console.log("Modified sentence:", sentence.replace('good', 'bad'));

//Question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push("Slytherin");
console.log("After push(Syltherin):", houses);
houses.pop();
console.log("Final houses array", houses);

//Question 9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log("Modified spells array:", spells);

//Question 10
let professors = ['Dumbledore', 'McGongall', 'Snape', 'Hagrid'];
let selectedProffessor = professors.slice(1,3);
console.log("Selected professors:", selectedProffessor);

//Question 11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1,2);
console.log("Modified students array", students);

//Question 12
let phrase = 'Mischief Managed';
console.log("Final phrase:", phrase.trim().toLowerCase().concat('Harry'));

//Question 13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna','Draco');
console.log("Updated wizards array:", wizards);

//Question 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let extractedword = message.slice(11,19).concat('Castle');
console.log("Modified message:", extractedword);