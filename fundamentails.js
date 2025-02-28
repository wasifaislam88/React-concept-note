//1.how to declear a variable using let and const

const fatherName = 'Arnold';

let season = 'rainy';

season = 'winter';

//6 basic conditions: >,<,===, !==, <=, >=

//multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy'){

}

else if(fatherName === 'Arnold'){

}

else{

}


//3.array declare
//index,
//length,push,

const numbers = [89,35,98,12];
numbers[0] = 56;


//4. for loop

for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


//5.function

function multiply(num1,num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35,70);

//6.object
//3 ways to access property by name

const student ={
    name:'sakib khan',
    age:32,
    movies:['king khan', 'dhaka mastan']
}

const myVariable = 'age';

console.log(student.age) //direct by property  

                                //access via property name string
console.log(student['age']);   //string '' modde dete hobe na hoi kaj korbe na

console.log(student[myVariable]);  //access via property name in a variable
                                    //variable ar name sorasori likhle string '' modde rakha jabe na..direct name likhte  hobe..


