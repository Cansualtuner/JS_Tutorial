const dizi=[1,2,3,4]

const kareDizi =[]

dizi.forEach(sayi=> {
    kareDizi.push(sayi*sayi);
} )

console.log(kareDizi);
//map
//?
const mapDizi = dizi.map(sayi=> sayi*3)
console.log(mapDizi);


//filter

const filtreliDizi = dizi.filter(sayi=>sayi>2)
console.log(filtreliDizi);

//reduce kümülatif toplam
const toplam = dizi.reduce((acc,sayi)=>{
    return acc+sayi;
})
console.log(toplam)