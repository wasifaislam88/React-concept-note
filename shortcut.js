//true...('wasifa',5,true,{},[])

//false ...('',0,false,null,undefined)

//cheek truthy

let myVar = 5;
//cheek any truthy
if (myVar){
    myVar = myVar * 100;
}

else {
    myVar = 0;
}

//cheek falssy

let myMoney = 50;
//you check negative or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
}

else{
    food = 'cha';
}

// shortcut likhar jonno ....ternary .oparator..
let food1 = money>100 ? 'biriyani' : 'cha';
console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);


//number to string conversion

const num1 = 52;
console.log(num1);
const numString = num1 + '';
console.log(numString);

// string to number 
const input = '560';
const inputNum = +input;
console.log(inputNum);

let isActive = true;  //false hole output hide user asbe
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser(); 

//use && if the left side is true then righf side will be executes
isActive && showUser();

//use || if the left side is false then right side will be executed

isActive || hideUser();

//toggle boolean

isActive = !isActive;