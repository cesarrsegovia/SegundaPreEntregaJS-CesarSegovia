//Simulador ecommerce
//Variables
let Top = 1;
let Jogger = 2;
let Vestido = 3;
let Bikini = 4;

//Bievenida
const MARCA = "Tienda Online Viggo"
const BIENVENIDA = ("¡Bienvenido a  " + MARCA+"!");

console.log(MARCA);
alert(BIENVENIDA);

// Registro
let NombreCliente= prompt("Ingrese su Nombre").toUpperCase();
let ApellidoCliente = prompt("Ingrese su Apellido").toUpperCase();
let CorreoCliente= prompt("Ingrese su Dirección de Correo Electrónico").toUpperCase();
    if (CorreoCliente.includes("@")){
        let CorreoCliente = alert("Correo electronico valido");
    } 

function solicitarNombre() {
    alert("Bienvenido " + NombreCliente + " "+ ApellidoCliente + " . ¡Gracias por visitarnos!. " + "Recibirás la confirmación de compra al correo ingresado: " + CorreoCliente)
};

//Array carro
const carrito = [];


//Opciones al usuario
function elegirPrenda() {

    let prenda;
        do {
        prenda = parseInt(prompt("Ingrese la prenda que deseas consultar.\n\nEjemplo seleccione '1' para Top.\n\n1- Top\n2- Jogger\n3- Vestido\n4- Polera"));
            } while (prenda !=1 && prenda !=2 && prenda !=3&& prenda !=4);
            switch(prenda){
                case 1:
                return "Top";
                case 2:
                return "Jogger";
                case 3:
                return "Vestido";
                case 4:
                return "Polera";

            default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            break;
        }
};

//Talles
function elegirTalla() {
    let talla;
    do {
        talla = parseInt(prompt("Seleccione la talla.\n\nEjemplo seleccione '1' S.\n\n1- S \n2- M \n3- L"));
    } while (talla !=1 && talla !=2 && talla !=3);
    switch(talla){
        case 1:
            return "S";
        case 2:
            return "M";
        case 3:
            return "L";
        default:
            console.log("Solo puedes elegir un número entre 1 y 3");
            alert("Solo puedes elegir un número entre 1 y 4");
        break;
    }
};

//Validación de precio
function validarPrecio (prenda, talla) {

    if (prenda === "Top" && talla === "S") {
                return 50;
    } else if (prenda === "Top" && talla === "M") {
                return 55;
    } else if (prenda === "Top" && talla === "L") {
                return 60;     
    } 
    
    if (prenda === "Jogger" && talla === "S") {
        return 40;
    } else if (prenda === "Jogger" && talla === "M") {
        return 50;
    } else if (prenda === "Jogger" && talla === "L") {
        return 60; 

}

    if (prenda === "Vestido" && talla === "S") {
        return 60;
    } else if (prenda === "Vestido" && talla === "M") {
        return 70;
    } else if (prenda === "Vestido" && talla === "L") {
        return 80; 
}

    if (prenda === "Polera" && talla === "S") {
        return 80;
    } else if (prenda === "Polera" && talla === "M") {
        return 90;
    } else if (prenda === "Polera" && talla === "L") {
        return 100; 
}
};

// Total 
function preciototal (nombre, talla, precio){
    alert("El precio de " + nombre + " talla "+ talla + "\nes de $" + precio)
    agregarProducto()
};

//Agregar productos
function agregarProducto() {
    let agregarProducto;
    do {
        agregarProducto = parseInt(prompt( "Desea añadir más productos?.\n\n1- Si.\n\n2- No "))
    } while (agregarProducto !=1 && agregarProducto !=2);

    switch(agregarProducto){
        case 1:
            flow(); 
        case 2:
            detalleCompra();
            break;
        default:
            console.log("Solo puedes elegir un número entre 1 y 2");
            alert("Solo puedes elegir un número entre 1 y 2");
            break;
    }
};

//Detalle de compra
function detalleCompra() {
    let detalle = "Detalle de compra \n\n"
    let body = "Prenda  Talla  Precio\n"
    let item = ""
    let total = 0;
    
    carrito.forEach((element) => {
    item +=  element.nombre+ "     "+  element.talla+"     "+  element.precio+"\n";
    total+= element.precio;
    });

    let precioTotal = "Total $"+total
    let fin = "\n ========================"
    let boleta = detalle + body + item + precioTotal +fin
    
    console.log(boleta)
    let pago = 0

// Pago
    do {
        pago = parseInt(prompt("El resumen de tu compra: " + boleta+ "\n¿Con cuanto pagas?"));
        while (isNaN(pago)) {
            alert("Ingrese un valor númerico");
            break;
            detalleCompra()
        }

        while (pago < total) {
            alert ("Monto insuficiente");
            break;
            detalleCompra()
        } 
        } while (pago < total){
        alert("¡Gracias por tu compra!, " + NombreCliente + ". En breve recibirás información de envio al correo registrado, tu: pedido llegará pronto" + ". Tu vuelto es $" + (pago-total))
        saludoFinal ();

    } 

};

function saludoFinal (){
    carrito.forEach(element => console.log(element));
    console.log("Gracias por preferir a " + MARCA + " . ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + " . ¡Hasta Luego!");
};

//Constructor de objetos
class Prenda { // 

    constructor(nombre, talla, precio){
        this.nombre = nombre
        this.talla = talla
        this.precio = precio
    }
};

// Inicio del simulador
function flow() {
    let prendaNombre = elegirPrenda();
    let tallaNombre = elegirTalla();
    let precioProducto = validarPrecio(prendaNombre, tallaNombre);

    console.log(prendaNombre)
    console.log(tallaNombre)
    console.log(precioProducto)

    let prenda = new Prenda(prendaNombre, tallaNombre, precioProducto)
    console.log(prenda)
    carrito.push(prenda) 
    preciototal(prenda.nombre, prenda.talla, prenda.precio);
};

solicitarNombre();
flow();
