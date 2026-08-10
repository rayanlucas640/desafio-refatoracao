let n1 = "Café";
let p1 = 8;
let q1 = 2;

let n2 = "Pão de Queijo";
let p2 = 6;
let q2 = 3;

let n3 = "Bolo";
let p3 = 10;
let q3 = 1;

function totalCafe() {
    let resultado = p1 * q1;

    if (q1 >= 3) {
        resultado = resultado - (resultado * 0.10);
    }

    console.log(n1 + ": R$ " + resultado);
}

function totalPao() {
    let resultado = p2 * q2;

    if (q2 >= 3) {
        resultado = resultado - (resultado * 0.10);
    }

    console.log(n2 + ": R$ " + resultado);
}

function totalBolo() {
    let resultado = p3 * q3;

    if (q3 >= 3) {
        resultado = resultado - (resultado * 0.10);
    }

    console.log(n3 + ": R$ " + resultado);
}

totalCafe();
totalPao();
totalBolo();