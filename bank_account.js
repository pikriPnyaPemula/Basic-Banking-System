// Mendeklarasikan Variabel Saldo dengan nilai awal
let saldo = 200000;
function tambahSaldo(){
    let tambahSaldoInt = parseInt(window.prompt("Masukkan Jumlah Saldo yang ingin ditambahkan : "));
    saldo += tambahSaldoInt;
    return (`Saldo kamu saat ini : ${saldo}`);
}
// console.log(tambahSaldo());
// alert(`Saldo berhasil ditambahkan. Saldo anda saat ini : ${saldo}`);
// console.log(`Saldo berhasil ditambahkan. Saldo anda saat ini : ${saldo}`);

// Function Kurang Saldo
function kurangSaldo(){
    let kurangSaldoInt = parseInt(prompt("Masukkan Jumlah Saldo yang ingin ditarik : "));
    saldo -= kurangSaldoInt;
    return (`Saldo kamu saat ini : ${saldo}`);
}
// console.log(kurangSaldo());
// alert(`Saldo berhasil ditarik. Saldo anda saat ini : ${saldo}`);
// console.log(`Saldo berhasil ditarik. Saldo anda saat ini : ${saldo}`);

let repeat = true;
do{

let menu = Number(prompt("Silahkan Pilih Menu : \n1. Tambah Saldo\n2. Kurangi Saldo"))


switch (menu){
    case 1 :
        alert (tambahSaldo());
        break;

    case 2 :
        alert (kurangSaldo());
        break;
    
    default:
    alert("Menu tidak diketahui");
}
repeat = confirm('Lakukan Transaksi lagi?');

}while(repeat);