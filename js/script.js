const btn = document.getElementById('calcola');

const calcTicket = function () {
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    console.log(km);
    console.log(age);


}

btn.addEventListener('click', calcTicket);
