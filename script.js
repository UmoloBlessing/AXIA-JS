'use strict';

// let myName = "blessing";
// if (myName === "blessing") alert("blessing is frontend developer");

// let myJob = "A Frontend developer";
// console.log(myJob);

// let myAge = "19";
// console.log(myAge);

// let myName = "blessing";
// let Ages = 19 + 12 + 49 +62;

// console.log(myName);
// console.log(Ages);

// let age = 46;
// let myName = 'Blessing';
// let isAnEngineer = true;
// let favFood;

// console.log(age);
// console.log(myName);
// console.log(isAnEngineer);
// console.log(favFood);


// console.log(typeof age);
// console.log(typeof myName);
// console.log(typeof isAnEngineer);
// console.log(typeof favFood);


// var blessingSchool = 'yabatech';

// console.log(blessingSchool)


// let age = 18;

// age = 19;

// age = 20;

// console.log(age);



// const myName = 'Blessing';
// const blessing = true;
// blessing = false;

// console.log(blessing);


// const currentYear = 2023;
// const birthYear = 1998;
// const currentAge = currentYear - birthYear;

// console.log(currentAge);


// const answer = 12 * 3 / (23 - 1);
//  console.log(answer);

// const totalMassOfMales = 50 + 45 + 51 + 30;
// const totalNumberOfMale = 4;
// const totalMassOfFemales = 30 + 30 + 60 + 42 + 50;
// const totalNumberOfFemale = 5;


// const avgBodyMassOfMale = totalMassOfMales / totalNumberOfMale;
// const avgBodyMassOfFemale = totalMassOfFemales / totalNumberOfFemale;

// console.log(avgBodyMassOfMale);
// console.log(avgBodyMassOfFemale);

// console.log(avgBodyMassOfMale > avgBodyMassOfFemale);


// // const BMI = bodyMass / height ** 2;
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / johnHeight ** 2;

// const isMarkBMIHigher = markBmi > johnBmi;


// console.log(markBmi);
// console.log(johnBmi);
// console.log(isMarkBMIHigher);

// const studentName = "Blessing";
// const studentSchool = "Axia Africa";
// const studentExperience = "1 year";
// const studentFavFood = "Rice";

// // console.log(`${studentName} is a student of ${studentSchool}. He has ${studentExperience} experience in frontend development and his faveorite food is ${studentFavFood}.`)

// // CONCATENATION

// console.log(studentName + ' is a student of ' + studentSchool + ' and he has ' + studentExperience + ' experience amd his favfood is ' + studentFavFood);



// // const BMI = bodyMass / height ** 2;
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / johnHeight ** 2;

// const isMarkBMIHigher = markBmi > johnBmi;

// console.log(markBmi);
// console.log(johnBmi);
// console.log(isMarkBMIHigher);

// // if(isMarkBMIHigher) {
// //     console.log(`Mark has a higher BMI of ${markBmi}`);
// // } else {
// //     console.log(`John has a higher BMI of ${johnBmi}`);
// // }

// if(isMarkBMIHigher) {
//     console.log(`Mark has a higher BMI of ${markBmi}`);
// } else if(markBmi === johnBmi) {
//     console.log(`Mark and john have the same BMI`);
// } else {
//     console.log(`John has a higher BMI of ${johnBmi}`);
// }


// const myName = Number('Umolo');
// const myExperience = 3;

// // console.log(myName, myExperience);
// // console.log(typeof myName);
// // console.log(typeof myExperience);
// // console.log(String(myExperience));


// // const answer = 22 + 1 + "32" + 22 + 1;

// // console.log(answer);


// console.log(Boolean(myName));


// const myAge = "20";
// const myNextAge = 20;
// const totalAge = myAge + myNextAge;

// if(myAge === myNextAge) {
//     alert("Good to go!")
// } else {
//     alert("computer is confused");
// }


// BOOLEAN LOGIC
// Minimum requirement for a job is to be above 18 and have completed NYSC and also live in lagos.
// AND (&&), OR (||) NOT(!).
// The rule of AND requires all the value to be true
// The rule of OR requires one of the value to be true
// The rule od NOt requires all the value to be false


// const blessingAge = true;
// const blessingNysc = false;
// const blessingLagos = true;

// if(blessingAge || blessingNysc || blessingLagos) {
//     console.log("Congratulations, we want to work with you.");
// } else { 
//     console.log("You can not work with us. Go and finish your NYSC.");
// }


// const chikaName = "chika";
// prompt();

// if(!chikaName) {
//     alert("Not chika name, type the correct name");
// } else {
//     alert("Welcome chika");
// }


// SWITCH STATEMENT

// switch (expression OR value ) {

    //     case choice1:
    //         // run this code
    //         break;
    
    //     case choice2:
    //         // run this different code
    //         break;
    
    //         // add as many cases as needed
    
    //     default:
    //         // run this code if no case matches
    //         // no need for a break here
    
    // }
    
    // switch (2) {
    //     case 1:
    //         //run this code
    //         console.log(1);
    //         break;
    
    //     case 2:
    //         // run this different code
    //         console.log(2);
    //         break;
    
    //     case 3:
    //         // run this different code
    //         console.log(3);
    //         break;
    
    //     default:
    //     console.log("No match")
    
    // }

// const blessingAge = true;
// const blessingNysc = false;
// const blessingLagos = true;

// const day = prompt();

// switch(day) {
//     case 'monday':
//         console.log('Check Email');
//         console.log('Brush teeth');
//         console.log('week schedule');
//         console.log('Eat my food');
//         console.log('code');
//         console.log('read and socialize');
//         console.log('review class');
//         console.log('eat and do any other stuff');
//         break;
    
//     case 'tuesday':
//         console.log('Check Email');
//         console.log('Brush teeth');
//         console.log('Eat my food');
//         console.log('code');
//         console.log('read and socialize');
//         console.log('eat and do any other stuff');
//         break;

//     case 'wednesday':
//         console.log('Check Email');
//         console.log('Brush teeth');
//         console.log('Eat my food');
//         console.log('code');
//         console.log('review class');
//         console.log('read and socialize');
//         console.log('eat and do any other stuff');
//         break;

//     case 'thursday':
//         console.log('Check Email');
//         console.log('Brush teeth');
//         console.log('Eat my food');
//         console.log('code');
//         console.log('review class');
//         console.log('read and socialize');
//         console.log('eat and do any other stuff');
//         break;

//     case 'friday':
//         console.log('Check Email');
//         console.log('Brush teeth');
//         console.log('Eat my food');
//         console.log('code');
//         console.log('review class');
//         console.log('read and socialize');
//         console.log('eat and do any other stuff');
//         break;

//         default:
//             console.log('Nothing to do');




// }


// const blessingAge = true;
// const blessingNysc = true;
// const blessingLagos = true;


// // TERNARY OPERATOR
// // condition ? ifTrue : ifFalse;


// // blessingAge 
// // ? console.log("Congratulations, we want to work with you.") 
// // : console.log("You can not work with us.");

// blessingAge && blessingLagos && blessingNysc
// ? console.log("Congratulations, we want to work with you.") 
// : console.log("You can not work with us.");


// statement and expression

// // EXPRESSION

// const age = 12 + 13;

// // STATEMENT

// the if and else statement


// function mySelf() {
//     console.log("Blessing");
// }

// mySelf();
// mySelf();
// mySelf();
// mySelf();
// mySelf();


// // FUNCTION DECALRATION


// function student(studentName, studentCourse) {
//     const details = `${studentName} is a student of axia africa. Taking ${studentCourse}.`;
//     return details;
// }

// // console.log(student("Blessing", "Frontend development"));

// const studentData1 = student("Blessing", "Frontend development");
// console.log(studentData1);

// const studentData2 = student("gift", "data analysis");
// console.log(studentData2);

// const studentData3 = student("doyin", "Backend development");
// console.log(studentData3);



// // FUNCTION EXPRESSION

// const student2 = function student(studentName, studentCourse) {
//     const details2 = `${studentName} is a student of axia africa. Taking ${studentCourse}.`;
//     return details2;
// }

// const studentData4 = student2("dimeji", "product design");
// console.log(studentData4);


// // ARROW FUNCTION

// const student3 = (studentName, studentCourse) => `${studentName} is a student of axia africa. Taking ${studentCourse}.`;
// const studentData5 = student3("finbarr", "product manager");
// console.log(studentData5);

// const studentData6 = student3("mubarak", "product marketing");
// console.log(studentData6);


// FUNCTION INSIDE A FUNCTION

// FRUIT CUTTER FUNCTION

// const fruitCutter = (fruitNumber) => fruitNumber * 3;

// // FRUIT JUICER

// const fruitJuicer = function(apples, mango, orange) {
//     const appleNumber = fruitCutter(apples);
//     const mangoNumber = fruitCutter(mango);
//     const orangeNumber = fruitCutter(orange);

//     const fruitJuice = `Juice made with ${appleNumber} pieces of apples and ${mangoNumber} pieces of mangos and ${orangeNumber} pieces of orange.`; 
//     return fruitJuice;
// }

// console.log(fruitJuicer(2, 1, 4));


// AGE CALCULATOR

// const currentAge = birthYear => 2023 - birthYear;


// // ALCOHOL CAUTION MACHINE

// const ageToTakeAlcohol = function(birthYear, firstName) {
//     const age = currentAge(birthYear);
//     const eligibleAge = age;
//     const remainingAge = 18 - age

//     if (age >= 18) {
//         console.log(`${firstName} is old enough to take alcohol`)
//         return eligibleAge;
//     } else {
//         console.log(`${firstName} !!!!!!!.........you have ${remainingAge} years to take alcohol........!!!!!!`)
//         return eligibleAge;
//     }

// }

// console.log(ageToTakeAlcohol(1995, "Blessing"));
// console.log(ageToTakeAlcohol(2006, "chika"));




// BMI CALCULATOR

// const bodyMassIndex = function(mass, height) {
//     return (mass / height) * 2;
// }


// const bodyMassIndex = (mass, height) => mass / height ** 2;

// // INFO ON YOUR WEIGHT

// const bodyWeight = function(mass, height, firstName) {
//     const weight = bodyMassIndex(mass, height);
//     const currentWeight = weight;

//     if(weight <= 18.5) {
//         console.log(`${firstName} you are underweight.`);
//         return currentWeight;
//     } else {
//         console.log(`${firstName} you have a normal weight`);
//         return currentWeight;
//     }

// }


// console.log(bodyWeight(14, 1.5, "blessing"));


// const age = 23;
// console.log(age.toString());
// console.log(typeof age);


// // ARRAY STORE MORE THAN ONE VALUE AND ALSO EXPRESSIONS

// const frontendStd = ['doyin', 'blessing', 'chika', 'mubarak'];

// // frontendStd.push('gift'); TO ADD TO THE END OF AN ARRAY
// // frontendStd.pop(); TO REMOVE FROM the end of an array
// // frontendStd.shift(); TO REMOVE THE FIRST ELEMENT FROM AN ARRAY
// // frontendStd.unshift('gift'); TO ADD ELEMENT TO THE FRONT OF AN ARRAY

// // frontendStd[2] = 'dimeji';  TO CHNAGE THE VALUE OF AN ARRAY


// // const courses = new Array ('frontend', 'product', 'data');

// console.log(frontendStd);
// // console.log(courses);

// // console.log(frontendStd[1]);

// // console.log(frontendStd[frontendStd.length - 1]); TO GET THE LAST ELEMENT OF AN ARRAY



// const array = [1, 2, 3, 4, 5];
// const indexToRemove = 2; // Index of the value to remove

// array.splice(indexToRemove, 1);

// console.log(array);




// const currenrYear = 2023;
// const birthYear = 1999;
// const firstName = 'dimeji';
// const lastName = 'balogun'
// const sex = 'male';
// const colleagues = ['blessing', 'doyin', 'chika'];
// const bestFood = 'rice'

// const dimeji = [firstName, sex, colleagues, currenrYear - birthYear];
// dimeji.push(bestFood);
// dimeji.unshift(lastName);
// dimeji.pop();
// dimeji.shift();
// // dimeji.splice(3);
// console.log(dimeji);




// // INDEX OF IS TO LOOK FOR THE POSITION OF AN ELEMENT

// console.log(dimeji.indexOf(colleagues));

// // INCLUDE TELLS US IF AN ELEMENT IS PRESENT OR NOT

// console.log(dimeji.includes(firstName));

// console.log(dimeji.includes(location));



// if(dimeji.includes(sex)) {
//     console.log('Dimeji is a male');
// } else {
//     console.log('Please add your gender');
// }

// if(dimeji.includes(location)) {
//     console.log('Dimeji is in lagos');
// } else {
//     console.log('Please add your location');
// }


// // BASIC ARRAY OPERATIONS
// // unshift
// // shift
// // pop
// // push


// // frontendStd.push('gift'); TO ADD TO THE END OF AN ARRAY
// // // frontendStd.pop(); TO REMOVE FROM the end of an array
// // // frontendStd.shift(); TO REMOVE THE FIRST ELEMENT FROM AN ARRAY
// // // frontendStd.unshift('gift'); TO ADD ELEMENT TO THE FRONT OF AN ARRAY





// OBJECT STORES MORE THAN ONE VARIABLE


// const balogunObject = {
//     firstName: 'dimeji',
//     birthYear: 2001,
//     lastName: 'balogun',
//     sex: 'male',
//     colleagues: ['blessing', 'doyin', 'chika'],
//     bestFood: 'rice',

//     // currentAge: function(birthYear){
//     //     return 2023 - birthYear;
//     // } 

//     // currentAge: function(){
//     //     return 2023 - this.birthYear;
//     // }
    

//     currentAgeFunction: function(){
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     }
// };


// console.log(dimejiObject.currentAgeFunction());
// console.log(dimejiObject.age); 


// console.log(dimejiObject.birthYear)

// console.log(dimejiObject.currentAge(birthYear));


// console.log(dimejiObject.currentAge(1992));



// // console.log(dimejiObject);

// // DONT NOTATION

// // console.log(dimejiObject.lastName);

// // BRACLET NOTATION

// // console.log(dimejiObject['sex']);


// // const about = prompt('What is your name');
// // console.log(about);



// const aboutDimeji = prompt('What do you want to know? firstName, birthYear, lastName, sex, colleagues, bestFood')

// if (dimejiObject[aboutDimeji]) {
//     console.log(dimejiObject[aboutDimeji]);
// } else {
//     console.log('i dont share info with strangers.');
// }


// INTRO TO LOOP

// DO WHILE LOOP

// const blessingPushUps = prompt();

// if(blessingPushUps > 20) {
//     console.log('Push more');
// } else {
//     console.log('You can rest now');
// }

// FOR LOOP

// for(let pushUps = 1; pushUps <= 20; pushUps ++){
//     console.log(`Push more, you just did ${pushUps} pushUps`);
// }

// ARRAY LOOP

// const dimeji = ['Dimeji', 'male', ['doyin', 'blessing', 'chika', 'mubarak'], 2023 - 1999, true];
// for(let i = 0; i < dimeji.length; i ++){
//     console.log(dimeji[i]);
// }


// const birthYears = [1999, 2001, 1990, 2003]
// const ages = [];
// const currentYear = 2023;

// for(let i = 0; i < birthYears.length; i ++) {
//    ages.push(currentYear - birthYears[i])
// }

// console.log(ages);



// WHILE LOOP

// let pushUps = 1;
//  while (pushUps <= 10) {
//     console.log(`Push more, you just did ${pushUps} pushUps`);
//     pushUps ++;
//  }


//LOOPS

// let myNumber = 0;
// while (myNumber < 50) {
//     myNumber++;
//     console.log(myNumber);
// }

// dont create an endless loop

// let myNumber = 0;
// do { console.log(myNumber);
// } while (myNumber < 50);


// for (let i = 1; i <= 10;) {
//     console.log(i);
//     i++;
// }

// let name = "Umolo";
// for (let i = 0; i <= name.length; i++) {
//     console.log(name.charAt(i));
// }

// let name = "Umolo";
// let counter = 0;
// let myLetter;
// while (counter <= 3) {
//     myLetter = name[counter];
//     console.log(myLetter);
//     if (counter === 1) {
//         counter += 2;
//         continue;
//     }
//     if (myLetter === "v") break;
//     counter++;
// }

// console.log(counter);


// DOM MANIPULATION

// const grandchild = document.getElementById("grandChild2").innerText;
// console.log(grandchild);



// const element3 = document.getElementsByClassName("grandchild");
// console.log(element3[2].innerText);

// const element4 = document.getElementsByClassName('grandchild4');
// console.log(element4[0].innerText);


// const parag = document.getElementsByTagName("p");
// console.log(parag[0].innerText);


// const grandKids = document.querySelector('#grandChild2').innerText;
// console.log(grandKids);

// const grandKid1 = document.querySelectorAll('.grandchild');
// console.log(grandKid1[2].innerText);

// const grandKid2 = document.querySelector('p');
// console.log(grandKid2.innerText)


// const grandKid3 = document.querySelectorAll('.grandchild');
// console.log(grandKid3);






