//function can be passed as a parameter to another function.
function sum(pro, mod) {
    let temp = pro(2, 3) + mod(9, 2);
    return "sum of product and module operations is " + temp;
}

function product(a, b) {
    return a * b;
}

function module(c, d) {
    return c % d;
}

document.getElementById("demo").innerHTML = sum(product, module)



//arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. 


let func = (firstName, lastName) => firstName[0] + lastName[0];


document.getElementById("demo1").innerHTML = func('Jogi', 'Patrapalli');