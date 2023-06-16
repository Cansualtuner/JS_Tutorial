// //document.getElementById("bio").innerHTML="Cansu altuner: 2020"
// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;
// var tumliste = document.getElementsByTagName("ul");
// var sehirler = tumliste[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i=0;i<tumElemanlar.length;i++){
//     alert(tumElemanlar[i])
// }

// var classElemanlari = document.getElementsByClassName("intro1");

// alert(classElemanlari[0]);


// var queryElemanları = document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);


// var isimElemanlari = document.getElementsByName("musteriAdi");
// alert(isimElemanlari[0].value);

// var cansu =document.getElementById("cansu").addEventListener("click",rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color="red";
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value = "Cansu"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);


var baslik = document.createElement("h2");
var node =document.createTextNode("Merhabalar");
baslik.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")


div1.insertBefore(baslik,p2);



alert("P2SİLİNİYO")
div1.removeChild(p2)

alert("p2 değiştiriliyo");
var p1 = document.getElementById("p1")
div1.replaceChild(baslik,p1)
