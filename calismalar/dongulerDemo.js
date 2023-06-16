var kullanicilar = [
    {email :"cansualt@gmail.com", sifre:"123"},
    {email : "berrinalt@gmail.com", sifre: "123"}
]
var tivitler = [
    {email:"cansualt@gmail.com",tivit:"pıst"},
    {email:"cansualt@gmail.com",tivit:"pıspıst"},
    {email:"berrinalt@gmail.com",tivit:"hey"}
]
var email = prompt("email?")
var sifre = prompt("sifre")

function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre);
    for (i =0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
            return true;
        }
    }
    return false;
}
function giris(){
    
    if (kullaniciVarmi(email,sifre)){
            console.log(tivitler)

    }
    else{
            console.log("Kullanıcı veya şifre ahatalı")
        }
    }
giris(email,sifre)