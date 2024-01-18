console.log("https://www.w3schools.com/");

let carName = "Volvo";

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