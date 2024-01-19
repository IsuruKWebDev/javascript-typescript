console.log("https://www.w3schools.com/");

let carName = "Volvo";

const value1 = 5;
const value2 = 6;
let total = value1 + value2;

console.log("Total : ", total);

let $myMoney = 555;

var name = 'Isuru';
var name = 'xxx';

console.log("Name : ", name);

const carArry = ["Toyota", "Audi", "BMW", "Honda"];
carArry[0] = "Morris Gurage";
carArry.push('Toyota');
console.log(carArry);

const car = {
    type: 'Toyota',
    model: 'Prius',
    color: 'Metalic Gray'
}

console.log(car.color);

const txtFunction = () => {

    let result = generateRandomString();
    document.getElementById("demo").innerHTML = result;
}

function alertDisplay() {
    window.alert("Alllerrrrrrrt...........");
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let res = '';
    for (let i = 0; i < characters.length; i++) {
        res += characters.charAt(Math.floor(Math.random() * 20));
    }

    return res;
}