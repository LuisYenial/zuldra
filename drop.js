//Items
var scaleP = 152
var scaleC = aleatorio(100, 299)
var scaleT = scaleP * scaleC
var cargar = false

//varForTest
var total;

//varFroRandomTypes
var min1;
var min2;
var max1;
var max2;

//kcVars
var kc = 1

//varsForTypes (discontinued)
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

/*//test
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

//consoleTest
for(i = 0; i < 1; i++)
{
    console.log(i)
    fstroll1()
    fstroll2()
}




//randomDropVar
var RDM2;
var RDM1;

//itemVars (maybe discontinued)
var PLR = 32000
var CLR = 200

var PCR = 42000
var CCR = 500

var PDR = 63000
var CDR = 300

var PPE = 3000
var CPE = 1500

//doubleDropVar
var dobledrop = false



//uglyVars
var imagenes = []
//Boss
imagenes["zulrah"] = "zulrah.png"
//Runes
imagenes["LawRune"] = "Lawrune.png"
imagenes["ChaosRune"] = "Chaosrune.png"
imagenes["DeathRune"] = "Deathrune.png"
imagenes["PureEssence"] = "Pureessence.png"
//Scales
imagenes["Scales"] = "Scales.png"
//Mats
imagenes["Flax"] = "Flax.png"
imagenes["Mahogany"] = "Mahogany.png"
imagenes["Yew_logs"] = "Yew_logs.png"
imagenes["Runite_ore"] = "Runite_ore.png"
imagenes["Coal"] = "Coal.png"
imagenes["Snakeskin"] = "Snakeskin.png"
imagenes["Dragonstone_bolt"] = "Dragonstone_bolt.png"
//seeds
imagenes["CalquatSeed"] = "CalquatSeed.png"
imagenes["MagicSeed"] = "MagicSeed.png"
imagenes["PalmSeed"] = "PalmSeed.png"
imagenes["PapayaSeed"] = "PapayaSeed.png"


//editorStart
tablaxd = document.getElementById("tabla")
boton = document.getElementById("botoncito")
boton.addEventListener("click", Kill)
v = document.getElementById("valor")


//dropClass
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
    //functionForScales
    mostrar()
    {
        tabla.appendChild(this.imagen)
        tabla.innerHTML += ("x"+ this.cantidad +" "+ this.precio+ " GP ")
        tabla.innerHTML += "<hr>"
    }
    //functionForItems
    mostrarX2()
    {
        tabla.appendChild(this.imagen)
        if(dobledrop)
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
//mats 5-8
dropeables.push( new drops("Flax",2000,1000) ) //5
dropeables.push( new drops("Yew_logs",6650,35) ) //6
dropeables.push( new drops("Runite_ore",22846,2) ) //7
dropeables.push( new drops("Snakeskin",560,35) ) //8
//raremats 9-11
dropeables.push( new drops("Mahogany",19050,50) ) //9
dropeables.push( new drops("Coal",27000,200) ) //10
dropeables.push( new drops("Dragonstone_bolt",2520,12) ) //11
//Seeds 12 - 15
dropeables.push( new drops("CalquatSeed",218,2) )//12
dropeables.push( new drops("MagicSeed",153000,1) )//13
dropeables.push( new drops("PalmSeed",1,54423) )//14
dropeables.push( new drops("PapayaSeed",3,8709) )//15



//la funcion importante °O°
function Kill()
{
    Kills = v.value
    for(var i = 0; i < Kills; i++)
    {
        dropear()
    }
}

function dropear() 
{
    FRASEINIT()
    //rollOfDice
    fstroll1()
    fstroll2()
    //randomTypeDrop
    RDM2 = aleatorio(min2,max2)
    RDM1 = aleatorio(min2,max1)
    //doubleDropCheck
    check()
    //scalesShow
    dropeables[0].mostrar()
    //dropShow:
    //singleItemX2Drop
    if(dobledrop)
    {
        dropeables[RDM1].mostrarX2()
    }
    //diferentItems
    else 
    {   
    dropeables[RDM1].mostrar()
    dropeables[RDM2].mostrar()
    }

    //scalesQuantityRestart
    dropeables[0].cantidad = aleatorio(100, 299)
    //disableDoubleDrop
    diable()  
}

//FUNCIONES :3

//1ST ROLL
function fstroll1()
{
    var randomEishon;
    randomEishon =  aleatorio(21000,100000)
    if(randomEishon < 15) //ultra rare
    {
        console.log("yay rare color " + randomEishon)
    }
    else if(randomEishon > 79525) 
    {
        min1 = 5
        max1 = 8
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
        min1 = 9
        max1 = 11

        console.log("yay sacaste raremats " + randomEishon) 
    }
    else if(randomEishon > 21326) 
    {
        min1 = 12
        max1 = 15
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

//2ND ROLL
function fstroll2()
{
    var randomEishon;
    randomEishon =  aleatorio(21800,100000)
    if(randomEishon < 15) //ultra rare
    {
        console.log("yay rare color " + randomEishon)
    }
    else if(randomEishon > 79525) 
    {
        min2 = 5
        max2 = 8
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
        min2 = 9
        max2 = 11

        console.log("yay sacaste raremats " + randomEishon) 
    }
    else if(randomEishon > 21326) 
    {
        min2 = 12
        max2 = 15
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

function diable()
{
    dobledrop = false
}

function check()
{
    var d = 1
    for(d = 1; d < 20; d++)
    {
        if(RDM2 == d && RDM1 == d)
        {
            dobledrop = true
        }
    }
    d = 1
    tabla.innerHTML += "<hr>" 
} 


function aleatorio(min,max) 
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min    
    return resultado
}

function FRASEINIT ()
{
    tabla.innerHTML +=("<h1>Kill Count : " + kc + "</h1>")
    console.log("kc " + kc)
    kc = kc+1
}

function numberWithCommas(x) 
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
