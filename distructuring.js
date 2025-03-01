//1. array destructuring

const numbers = [42,65];

//const x = numbers [0];
// const y = numbers [1];

// const [x,y] = [42,20]

const [x,y] = numbers;

console.log(x,y);

function boxify(num1,num2){
    const nums = [num1,num2];
    return nums;
}

console.log(boxify(90,39));

// const [first,second] = [80,90];
const [first,second] = boxify(90,34);


const student ={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhaker king']
}

const [firstMovie,secondMovie] = student.movies;

//object destructuring

// object simple destructuring
// const {name, age} = {name:'wasifa', age:18};
const {name, age} = { id:12, salary:3400, name:'wasifa', age:18};

const employee = {
    id:'VS code',
    designation : 'developer',
    machine: 'mac',
    languages:['html','css', 'js'],
    specification:{
        height:66,
        weight:67,
        adress:'kumartali',
        drink:'water'
    }
}

const {machine,id} = employee;    //match hole debe na nole dibe na
const {weight,address} = employee.specification;  //ei khane sodo employee dele hobe specification dete hone cz employee te address nai .employee modde specification.....

