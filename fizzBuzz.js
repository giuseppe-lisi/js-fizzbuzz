let printIfMultiple;

// conto fino a 100
for (let i = 1; i <= 100; i++) {
    printIfMultiple = "";
    // se il numero è multiplo di 3 o 5 aggiungo ad una stringa Fizz, Buzz o entrambi
    if (i % 3 == 0) {printIfMultiple += "Fizz";}
    if (i % 5 == 0) {printIfMultiple += "Buzz";}
    // se multiplo stampo la stringa, altrimenti stampo il numero, 
    // il tutto in dei div che vengono aggiunti alla pagina
    if (printIfMultiple.length == false) {
        document.getElementById("content").innerHTML += `<div class="col py-4 border border-dark">${i}</div>`;
    } 
    else {
        if (printIfMultiple == "Fizz") {
            document.getElementById("content").innerHTML += `<div class="col bg-warning py-4 border border-dark">${printIfMultiple}</div>`;
        } else if (printIfMultiple == "Buzz") {
            document.getElementById("content").innerHTML += `<div class="col bg-danger py-4 border border-dark">${printIfMultiple}</div>`;
        } else {
            document.getElementById("content").innerHTML += `<div class="col bg-success py-4 border border-dark">${printIfMultiple}</div>`;
        }
    }
}

