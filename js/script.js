var km = prompt("Quanti Kilometri devi percorrere?");

if(isNaN(km)){
    alert('Errore, devi inserire un numero valido')
}

var eta = prompt("quanti hanni hai?");

if(isNaN(eta)){
    alert('Errore, devi inserire un numero valido')
}

console.log(km);
console.log(eta);

var prezzokm = km * 0.21;

console.log(prezzokm);

var prezzofinale;

if(eta < 18){
    prezzofinale = prezzokm * 0.80;
    document.getElementById("costofinale").innerHTML = "Devi percorrere "+km+"km e dato che sei minorenne il costo del biglietto "+prezzokm+"$, ha uno sconto del 20% e quindi costa: "+prezzofinale+"$";
}else if(eta > 65){
    prezzofinale = prezzokm * 0.60;
    document.getElementById("costofinale").innerHTML = "Devi percorrere "+km+"km e dato che hai più di 65 anni il costo del biglietto "+prezzokm+"$, ha uno sconto del 40% e quindi costa: "+prezzofinale+"$";
}else{
    prezzofinale = prezzokm;
    document.getElementById("costofinale").innerHTML = "Devi percorrere "+km+"km quindi il biglietto costa: "+prezzofinale+"$"
}

