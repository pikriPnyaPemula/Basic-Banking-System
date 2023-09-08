class Banking{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposit(){
        let tambahSaldo = Number(window.prompt("Masukkan Jumlah Saldo yang ingin di deposit : "));
    this.saldo += tambahSaldo;
    console.log(`Saldo kamu saat ini : ${this.saldo}`)
    return (`Saldo kamu saat ini : ${this.saldo}`);
    }

    withdraw(){
        let kurangSaldo = Number(prompt("Masukkan Jumlah Saldo yang ingin di withdraw : "));
    this.saldo -= kurangSaldo;
    console.log(`Saldo kamu saat ini : ${this.saldo}`)
    return (`Saldo kamu saat ini : ${this.saldo}`);
    
    }

    transaksiMenu(){
        let repeat = true;
    do{

    let menu = Number(prompt("Silahkan Pilih Menu : \n1. Tambah Saldo\n2. Kurangi Saldo"));


    switch (menu){
        case 1 :
            alert(this.deposit());
            break;

        case 2 :
            alert(this.withdraw());
            break;
    
        default:
            alert("Menu tidak diketahui");
}
repeat = confirm('Lakukan Transaksi lagi?');

}while(repeat);
}
}
function delay() {
    setTimeout(function () {
        let account = new Banking(100000);
        account.transaksiMenu();
    }, 5000);
}
delay();




// let account = new Banking(100000);
// account.transaksiMenu();