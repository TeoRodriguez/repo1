var distancia; 
distancia = prompt ("ingrese la distancia hacia su destino en metros", "")

if (distancia >=0 && distancia <1000){
    console.log ("debera viajar a pie")
    document.write("debera viajar a pie")
}
if(distancia >=1000 && distancia <10000){
    console.log("debera viajar en bicicleta")
    document.write("debera viajar en bicicleta")
}
if(distancia >=10000 && distancia <30000){
    console.log("debera viajar en colectivo")
    document.write("debera viajar en colectivo")
}
if(distancia >=30000 && distancia <100000){
    console.log("debera viajar en auto")
    document.write("debera viajar en auto")
}
if(distancia >=100000){
    console.log("debera viajar en avion")
    document.write("debera viajar en avion")
}