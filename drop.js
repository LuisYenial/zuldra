//items
var scaleP = 152
var scaleC = aleatorio(100, 299)
var scaleT = scaleP * scaleC
var cargar = false

var RDM2 = aleatorio(1,2)
var RDM = aleatorio(1,2)

var PLR = 32000
var CLR = 200

var PCR = 42000
var CCR = 500

var PDR = 63000
var CDR = 300

var PPE = 3000
var CPE = 1500


//vars feas
var dobledrop = false

var imagenes = []
imagenes["zulrah"] = "zulrah.png"
imagenes["LawRune"] = "Lawrune.png"
imagenes["ChaosRune"] = "Chaosrune.png"
imagenes["DeathRune"] = "Deathrune.png"
imagenes["PureEssence"] = "Pureessence.png"
imagenes["Scales"] = "Scales.png"

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
        if(RDM2 == 1 && RDM == 1)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else if(RDM2 == 2 && RDM == 2)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else if(RDM2 == 3 && RDM == 3)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else if(RDM2 == 4 && RDM == 4)
        {
            tabla.innerHTML += ("x"+ this.cantidad * 2 +" "+ this.precio * 2+ " GP ")
            dobledrop = true
        }
        else
        {
        tabla.innerHTML += ("x"+ this.cantidad +" "+ this.precio+ " GP ")
        }
        tabla.innerHTML += "<hr>"
    }   
}

var dropeables = []
dropeables.push( new drops("Scales",scaleT,scaleC) )
dropeables.push( new drops("LawRune",PLR,CLR) )
dropeables.push( new drops("ChaosRune",PCR,CCR) )
dropeables.push( new drops("DeathRune",PDR,CDR) )
dropeables.push( new drops("PureEssence",PPE,CPE) )


//la funcion importante
function dropear() 
{
    lastman()
    //dropeo y mostreo de scales
    dropeables[0].mostrar()
    //dropeo y mostreo de drops
    if(dobledrop)
    {
        dropeables[RDM].mostrar()
    }
    else 
    {   
    dropeables[RDM].mostrar()
    dropeables[RDM2].mostrar()
    }
    RDM2 = aleatorio(1,2)
    RDM = aleatorio(1,2)
    dropeables[0].cantidad = aleatorio(100, 299) 
    console.log("Scales: " + dropeables[0].cantidad)
    console.log(dropeables[1].cantidad)   
    console.log(dropeables[2].cantidad)  
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

