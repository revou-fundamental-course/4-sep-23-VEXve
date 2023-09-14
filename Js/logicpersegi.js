// logicpersegi.js

function hitungLuas() {
    var sisi = parseFloat(document.getElementById("sisi").value);

    if (!isNaN(sisi)) {
        var luas = sisi * sisi;
        document.getElementById("luas").innerHTML = "Luas: " + luas;
        document.getElementById("rumus").innerHTML = "Rumus Luas: sisi x sisi";
    } else {
        document.getElementById("luas").innerHTML = "Masukkan panjang sisi yang valid.";
        document.getElementById("rumus").innerHTML = "";
    }
}

function hitungKeliling() {
    var sisi = parseFloat(document.getElementById("sisi").value);

    if (!isNaN(sisi)) {
        var keliling = 4 * sisi;
        document.getElementById("keliling").innerHTML = "Keliling: " + keliling;
        document.getElementById("rumus").innerHTML = "Rumus Keliling: 4 x sisi";
    } else {
        document.getElementById("keliling").innerHTML = "Masukkan panjang sisi yang valid.";
        document.getElementById("rumus").innerHTML = "";
    }
}

function resetHitungan() {
    document.getElementById("sisi").value = "";
    document.getElementById("luas").innerHTML = "";
    document.getElementById("keliling").innerHTML = "";
    document.getElementById("rumus").innerHTML = "";
}
