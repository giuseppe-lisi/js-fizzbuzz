let printIfMultiple;

// conto fino a 100
for (let i = 1; i <= 100; i++) {
    printIfMultiple = "";
    // se il numero è multiplo di 3 o 5 aggiungo ad una stringa Fizz, Buzz o entrambi
    if (i % 3 == 0) {printIfMultiple += "Fizz";}
    if (i % 5 == 0) {printIfMultiple += "Buzz";}
    // se il numero non era un multiplo di 3 o 5 stampo il numero,
    // altrimenti stampo la stringa
    if (printIfMultiple.length == false) {
        console.log(i);
    } 
    else {
        console.log(printIfMultiple);
    }
}

