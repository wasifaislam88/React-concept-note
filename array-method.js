const products = [
    {name: 'laptop', price:3200, brand:'lenovo', color:'silver'},
    {name: 'phone', price:7000, brand:'iphone', color:'golden'},
    {name: 'watch', price:3200, brand:'casio', color:'yellow'},
    {name: 'sunglass', price:300, brand:'ribon', color:'black'},
    {name: 'cemera', price:9000, brand:'canon', color:'gray'},
];

const brands = products.map(product =>product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product))    //sob golo product dekhabe

products.forEach(product => console.log(product.color))  //just product ar color dekhabe


//map hocche je jinigh ta nibe seta thake array return korbe

//forEach return korbe na

//filter.....condition fullfile korle dibe..

const cheap = products.filter(product => product.price <=5000);
console.log(cheap);

const specificName = products.filter(product=> product.name.includes('n'));
console.log(specificName);


//find 

const special = products.find(product => product.name.includes('n'));
console.log(special);    //10 ta match hole o 1 tai dibe...