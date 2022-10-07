// DATA
let data = new Date();
let gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();
let writeDate = gg + mm + aaaa;

console.log(writeDate)
document.getElementById('date_add').innerHTML += writeDate;

// FORM CON FUNZIONE
const btn = document.getElementById('calcola');

const calcTicket = function () {
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);

    console.log(km + ' km da percorre', '/', age + ' età cliente');

    document.getElementById('km_around').innerHTML = km;

    if (isNaN(km) || isNaN(age)) {
        alert('Hai sbagliato, inserisci un numero')
    };

    if (km == 0) {
        alert('Inserisci il numero di km che vuoi percorrere')
    };

    if (age == 0) {
        alert("Inserisci l'età del passeggero")
    };

    if (age < 14 && age != 0) {
        alert('Ricorda che non puoi viaggiare da solo, fatti sempre accompagnare da un adulto')
    };


    const prezzoKm = 0.21;
    console.log(prezzoKm + ` prezzo al km`);

    const kmEuroPercorsi = parseFloat(prezzoKm * km);

    const under_18 = 18;
    const over_65 = 65;
    const discount_20 = 0.20;
    const discount_40 = 0.40;

    if (age < under_18 && age != 0) {
        const sconto_20 = kmEuroPercorsi * discount_20;
        console.log('sconto 20%')
        const prezzoScontato_20 = kmEuroPercorsi - sconto_20
        console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoScontato_20));
        document.getElementById('price_list').innerHTML = `Prezzo di listino: ` + kmEuroPercorsi.toFixed(2) + ` &euro;`;
        document.getElementById('add_discount').innerHTML = `Ti è stato applicato uno sconto del 20% dal listino`;
        document.getElementById('total_price').innerHTML = `Tot: ` + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoScontato_20);

    } else if (age >= over_65) {
        const sconto_40 = kmEuroPercorsi * discount_40;
        console.log('sconto 40%')
        const prezzoScontato_40 = kmEuroPercorsi - sconto_40
        console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoScontato_40));
        document.getElementById('price_list').innerHTML = `Prezzo di listino: ` + kmEuroPercorsi.toFixed(2) + ` &euro;`;
        document.getElementById('add_discount').innerHTML = `Ti è stato applicato uno sconto del 40% dal listino`;
        document.getElementById('total_price').innerHTML = `Tot: ` + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoScontato_40);

    } else {
        console.log('no sconto')
        console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(kmEuroPercorsi));
        document.getElementById('total_price').innerHTML = `Tot: ` + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(kmEuroPercorsi);

    }


    //event.preventDefault()
}

btn.addEventListener('click', calcTicket);
