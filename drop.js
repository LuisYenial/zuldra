//items
var scaleP = 152
var scaleC = aleatorio(100, 299)
var scaleT = scaleP * scaleC
var cargar = false

var total;

var min1;
var min2;
var max1;
var max2;

var rarecolor = 15 //parseInt((1/6580) * 100000) //0.015 = 000,015 = 000,015 < 000,000 //15
var jar = 66//parseInt((1/1500) * 100000) //1500 //0.1 //81
var raredrop = 195//parseInt((1/512) * 100000) //512 //276
var pet = 50//parseInt((1/200) * 100000) //2000 //0.1 //1276 //950 de sobrante
var rareseed = 2000 //parseInt((1/124) * 100000) //124 //3276
var armournherbsnseeds = 3000//parseInt((1/62) * 100000) //62 //6276
var clue = 6000//parseInt((1/45) * 100000) //45
var other = 10000//parseInt((1/25) * 100000) //25
var seeds = 20475 //parseInt((1/20) * 100000) //20
var raremats = 17000 //parseInt((1/15) * 100000) //15
var runes = 20724//parseInt((1/12) * 100000) //12
var mats = 20475//parseInt((1/11) * 100000) //11

/*//pruebas
console.log(rarecolor)
total = rarecolor
console.log(total  + jar)
total += jar
console.log(total + raredrop)
total = total + raredrop
console.log(total+ pet)
total +=  pet
console.log(total +  rareseed)
total +=  rareseed
console.log(total +  armournherbsnseeds)
total +=  armournherbsnseeds
console.log(total +  clue)
total +=  clue
console.log(total +  other)
total +=  other
console.log(total +  seeds)
total +=  seeds
console.log(total +  raremats)
total +=  raremats
console.log(total +  runes)
total +=  runes
console.log(total + mats)
total +=  mats
*/

for(i = 0; i < 1; i++)
{
    console.log(i)
    fstroll1()
    fstroll2()
}

function fstroll1()
{
    var randomEishon;
    randomEishon =  aleatorio(58000,100000)
    if(randomEishon < 15) //ultra rare
    {
        console.log("yay rare color " + randomEishon)
    }
    else if(randomEishon > 79525) 
    {
        min1 = 5
        max1 = 11
        console.log("yay sacaste mats " + randomEishon) 
    }
    else if(randomEishon > 58801) 
    {
        min1 = 1
        max1 = 4

        console.log("yay sacaste runes " + randomEishon) 
    }
    else if(randomEishon > 41801) 
    {

        console.log("yay sacaste raremats " + randomEishon) 
    }
    else if(randomEishon > 21326) 
    {
        console.log("yay sacaste seeds " + randomEishon) 
    }
    else if(randomEishon > 11326) 
    {
        console.log("yay sacaste other " + randomEishon) 
    }
    else if(randomEishon > 5326) 
    {
        console.log("yay sacaste clue  " + randomEishon) 
    }
    else if(randomEishon > 2326) 
    {
        console.log("yay sacaste un rare armour " + randomEishon) 
    }
    else if(randomEishon > 326) 
    {
        console.log("yay sacaste un rare seed " + randomEishon) 
    }
    else if(randomEishon > 276) 
    {
        console.log("yay sacaste pet @@@@@@@@@@@@@@@@@@@@@@@@@@@@" + randomEishon) 
    }
    else if(randomEishon > 81) //rare
    {
        console.log("yay sacaste un rare drop @@@@@@@@@@@@@@@@@@@@@@@@@@@@" + randomEishon) 
    }
    else if(randomEishon > 15)//mas rare
    {
        console.log("sacaste un jar @@@@@@@@@@@@@@@@@@@@@@@@@@@@" + randomEishon)
    }
}

function fstroll2()
{
    var randomEishon;
    randomEishon =  aleatorio(58000,100000)
    if(randomEishon < 15) //ultra rare
    {
        console.log("yay rare color " + randomEishon)
    }
    else if(randomEishon > 79525) 
    {
        min2 = 5
        max2 = 11
        console.log("yay sacaste mats " + randomEishon) 
    }
    else if(randomEishon > 58801) 
    {
        min2 = 1
        max2 = 4
        console.log("yay sacaste runes " + randomEishon) 
    }
    else if(randomEishon > 41801) 
    {

        console.log("yay sacaste raremats " + randomEishon) 
    }
    else if(randomEishon > 21326) 
    {
        console.log("yay sacaste seeds " + randomEishon) 
    }
    else if(randomEishon > 11326) 
    {
        console.log("yay sacaste other " + randomEishon) 
    }
    else if(randomEishon > 5326) 
    {
        console.log("yay sacaste clue  " + randomEishon) 
    }
    else if(randomEishon > 2326) 
    {
        console.log("yay sacaste un rare armour " + randomEishon) 
    }
    else if(randomEishon > 326) 
    {
        console.log("yay sacaste un rare seed " + randomEishon) 
    }
    else if(randomEishon > 276) 
    {
        console.log("yay sacaste pet @@@@@@@@@@@@@@@@@@@@@@@@@@@@" + randomEishon) 
    }
    else if(randomEishon > 81) //rare
    {
        console.log("yay sacaste un rare drop @@@@@@@@@@@@@@@@@@@@@@@@@@@@" + randomEishon) 
    }
    else if(randomEishon > 15)//mas rare
    {
        console.log("sacaste un jar @@@@@@@@@@@@@@@@@@@@@@@@@@@@" + randomEishon)
    }
}

var RDM2 = aleatorio(min2,max2)
var RDM1 = aleatorio(min1,max1)

var PLR = 32000
var CLR = 200

var PCR = 42000
var CCR = 500

var PDR = 63000
var CDR = 300

var PPE = 3000
var CPE = 1500

var dobledrop = false

function diable()
{
    dobledrop = false
}

function check()
{
    if(RDM2 == 1 && RDM1 == 1)
    {
        dobledrop = true
    }
    else if(RDM2 == 2 && RDM1 == 2)
    {
        dobledrop = true
    }
    else if(RDM2 == 3 && RDM1 == 3)
    {
        dobledrop = true
    }
    else if(RDM2 == 4 && RDM1 == 4)
    {
        dobledrop = true
    } 
}

//vars feas


var imagenes = []
//el boss
imagenes["zulrah"] = "zulrah.png"
//runnas
imagenes["LawRune"] = "Lawrune.png"
imagenes["ChaosRune"] = "Chaosrune.png"
imagenes["DeathRune"] = "Deathrune.png"
imagenes["PureEssence"] = "Pureessence.png"
//scales
imagenes["Scales"] = "Scales.png"
//mats
imagenes["Flax"] = "Flax.png"
imagenes["Mahogany"] = "Mahogany.png"
imagenes["Yew_logs"] = "Yew_logs.png"
imagenes["Runite_ore"] = "Runite_ore.png"
imagenes["Coal"] = "Coal.png"
imagenes["Snakeskin"] = "Snakeskin.png"
imagenes["Dragonstone_bolt"] = "Dragonstone_bolt.png"

tablaxd = document.getElementById("tabla")
boton = document.getElementById("botoncito")
boton.addEventListener("click", dropear)

//creacion de las classes de los items
class drops
{
    constructor(o,p,q)
    {
        this.imagen = new Image()
        this.objeto = o;
        this.precio = p;
        this.cantidad = q;
        this.imagen.src = imagenes[this.objeto]
        this.imagen.width = 50
        this.imagen.height = 50
    }
    mostrar()
    {
        tabla.appendChild(this.imagen)
        tabla.innerHTML += ("x"+ this.cantidad +" "+ this.precio+ " GP ")
        tabla.innerHTML += "<hr>"
    }
    mostrarX2()
    {
        tabla.appendChild(this.imagen)
        if(RDM2 == 1 && RDM1 == 1)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else if(RDM2 == 2 && RDM1 == 2)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else if(RDM2 == 3 && RDM1 == 3)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else if(RDM2 == 4 && RDM1 == 4)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        tabla.innerHTML += "<hr>" 
    }   
}

var dropeables = []
//runas 0-4
dropeables.push( new drops("Scales",scaleT,scaleC) ) //0
dropeables.push( new drops("LawRune",PLR,CLR) ) //1
dropeables.push( new drops("ChaosRune",PCR,CCR) ) //2
dropeables.push( new drops("DeathRune",PDR,CDR) ) //3
dropeables.push( new drops("PureEssence",PPE,CPE) ) //4
//mats 5-11
dropeables.push( new drops("Flax",2000,1000) ) //5
dropeables.push( new drops("Mahogany",19050,50) ) //6
dropeables.push( new drops("Yew_logs",6650,35) ) //7
dropeables.push( new drops("Runite_ore",22846,2) ) //8
dropeables.push( new drops("Coal",27000,200) ) //9
dropeables.push( new drops("Snakeskin",560,35) ) //10
dropeables.push( new drops("Dragonstone_bolt",2520,12) ) //11





//la funcion importante
function dropear() 
{
    check()
    lastman()
    //dropeo y mostreo de scales
    dropeables[0].mostrar()

    //dropeo y mostreo de drops
    if(dobledrop)
    {
        dropeables[RDM1].mostrarX2()
    }
    else 
    {   
    dropeables[RDM1].mostrar()
    dropeables[RDM2].mostrar()
    }

    fstroll1()
    fstroll2()
    RDM2 = aleatorio(min2,max2)
    RDM1 = aleatorio(min2,max1)
    dropeables[0].cantidad = aleatorio(100, 299) 
    console.log("Scales: " + dropeables[0].cantidad)
    console.log(dropeables[1].cantidad)   
    console.log(dropeables[2].cantidad)
    diable()  
}

function aleatorio(min,max) 
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min    
    return resultado
}

function lastman ()
{
    tabla.innerHTML +=("<h1>Aqui esta tu Drop:</h1>")
}

function numberWithCommas(x) 
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//tes