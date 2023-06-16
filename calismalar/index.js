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


function giris(){
    if(email == kullanicilar[0].email && sifre == kullanicilar[0].sifre || 
        email == kullanicilar[1].email && sifre == kullanicilar[1].sifre){
            console.log(tivitler)

        }else{
            console.log("Kullanıcı veya şifre ahatalı")
        }
}
giris(email,sifre)