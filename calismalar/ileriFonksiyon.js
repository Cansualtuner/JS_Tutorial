var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}
selamFonksiyonu();

const selamFonksiyonu2 = () => console.log("Merhaba2");

selamFonksiyonu2();

const selamFonksiyonu3 =  (mesaj) => {
    console.log("Merhaba2");

} 

selamFonksiyonu3("merhabalar dünyam ");

var topla = (sayi1,sayi2) => {
    return sayi1+sayi2;
}

let toplam = topla(3,4)

console.log(topla);