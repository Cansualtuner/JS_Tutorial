class Personel{
    
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad =soyad;
    }



    kaydet(){
        console.log("Personel kaydedildi.")
    }
}
const personel = new Personel()

personel.kaydet();
console.log(personel.ad);
//