//1.JSON

const student = {
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar king']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentJSON);   //json thake normal javascript a convert korele..JSON.parse use kore..