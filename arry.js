var publice = [51, 45, 988, 98, 456];
var indexElement = publice[3];
console.log(indexElement); 

var friendsAge = [21, 22, 23, 20, 19]; 

var marks = [88, 89, 96, 69, 95, 78, 82, 99]
console.log(marks.indexOf(96));

console.log(publice[4]);
// console.log(friendsAge.length);

//array new value set
var publices = [51, 45, 988, 98, 456];
publices[0] = 52;
console.log(publices);


//arry index number and arrya element surch
var friendsName = ['Salam', 'kamal', 'aman', 'bablu']
console.log(friendsName.indexOf("kamal"));
console.log(friendsName[2]);
//arry push
friendsName.push('sumit');
console.log(friendsName);


var subMarks = [88, 89, 96, 69, 95, 78, 82, 99];
subMarks.push(86)
console.log(subMarks);


var subjectMarks = [88, 89, 96, 69, 95, 78, 82, 99];
subjectMarks.pop()
console.log(subjectMarks);


//arry first element add
var subjectsMarks = [88, 89, 96, 69, 95, 78, 82, 99];
subjectsMarks.unshift(100)
subjectsMarks.unshift(120)
console.log(subjectsMarks);
//arrrat first element add
subjectsMarks.shift()
console.log(subjectsMarks);

//arry short
var x = [88, 89, 96, 69, 48, 82, 95];
x.sort();
console.log(x);

var name = ['Camrul', 'Denny', 'Balam', 'Aman']
name.sort();
console.log(name);
 