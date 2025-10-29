for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        document.getElementById("content").innerHTML += `<div class="col bg-success py-4 border border-dark">FizzBuzz</div>`;
    } else if (i % 3 == 0) {
        document.getElementById("content").innerHTML += `<div class="col bg-warning py-4 border border-dark">Fizz</div>`;
    } else if (i % 5 == 0) {
        document.getElementById("content").innerHTML += `<div class="col bg-danger py-4 border border-dark">Buzz</div>`;
    } else {
        document.getElementById("content").innerHTML += `<div class="col py-4 border border-dark">${i}</div>`;
    }
}

