//1.JSON => 2stringify, 2.parse

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


// 2. fetch

fetch('url')
   .then(res => res.json())
   .then(data => console.log(data));

   //keys, values

   const keys = Object.keys(student);
   const values = object.values(student);

   //for
   const numbers = [23,54,67,87,23,67];
   numbers.forEach(num => console.log(num));
   numbers.map(num => num * 2);

   //for of on array like object
   //loop on an object using for in

   //add or remove from an array

   const products = [
    {name: 'laptop', price:3200, brand:'lenovo', color:'silver'},
    {name: 'phone', price:7000, brand:'iphone', color:'golden'},
    {name: 'watch', price:3200, brand:'casio', color:'yellow'},
    {name: 'sunglass', price:300, brand:'ribon', color:'black'},
    {name: 'cemera', price:9000, brand:'canon', color:'gray'},
];

const newProduct = {name: 'webcam', price:700, brand:'lal'};

// copy products array and then add newProduct

const newProducts = [...products,newProduct];

//create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product =>product.name !== 'phone'); //filter kore jetar name phone na seta nicchi...