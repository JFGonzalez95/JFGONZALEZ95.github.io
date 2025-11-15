var botonPalindromo = document.querySelector("#nueva-palabra");
var botonBorrar = document.querySelector('#borrar-resultado');
var botonDetectarVocales = document.querySelector("#nueva-frase");
var botonBorrarFrase = document.querySelector('#borrar-frase');
var botonBorrarComparacion = document.querySelector('#borrar-comparacion');
var botonComparar = document.querySelector('#comparar');
var botonContarVocal = document.querySelector("#nueva-vocal");
var botonBorrarVocal = document.querySelector('#borrar-vocal');
var input_palabra = document.querySelector("#input-palabra");
var output_palabra = document.querySelector("#output-palabra");
var input_frase = document.querySelector("#input-frase");
var output_frase = document.querySelector("#output-frase");
var input_vocal = document.querySelector("#input-vocal");
var output_vocal = document.querySelector("#output-vocal");
var output_comparacion = document.querySelector("#output-comparacion");
var output_frase = document.querySelector("#output-frase");
var input_numero1 = document.querySelector("#input-numero1");
var input_numero2 = document.querySelector("#input-numero2");
var botonURL = document.querySelector("#consultar-url");
var input_url = document.querySelector("#input-url");
var input_peticion = document.querySelector("#input-peticion");
var input_estado = document.querySelector("#input-estado");
var input_cabecera = document.querySelector("#input-cabecera");
var input_contenido = document.querySelector("#input-contenido");
var botonBorrarPeticion = document.querySelector("#borrar-peticion");

botonPalindromo.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    var textoIngresado = input_palabra.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    textoIngresado = textoIngresado.replace(/[^a-z0-9]/g, "");
    console.log(textoIngresado)
    let textoInvertido = textoIngresado.split("").reverse().join("");
    console.log(textoInvertido)
      if (input_palabra.value === "") {
        output_palabra.textContent = "";
      }
      else if(textoIngresado === textoInvertido){
        output_palabra.textContent = "Es Palindromo";
      } 
      else {
        output_palabra.textContent = "No es Palindromo";
      }
})       

botonDetectarVocales.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    var textoIngresado = input_frase.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    textoIngresado = textoIngresado.replace(/[^a-z0-9]/g, "");
    console.log(textoIngresado)
    const vocales = ["a", "e", "i", "o", "u"];
    // Usamos filter para quedarnos con las vocales presentes
    let presentes = vocales.filter(v => textoIngresado.includes(v)).join(",");
    console.log(presentes)
      if(input_frase.value ===""){
        output_frase.textContent =""
    }
    else{
        output_frase.textContent = "Vocales: "+presentes
    }
})       

botonContarVocal.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    var textoIngresado = input_vocal.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    textoIngresado = textoIngresado.replace(/[^a-z0-9]/g, "");
    console.log(textoIngresado)
    let listado_vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    // Recorremos cada carácter
    for (let char of textoIngresado) {
        if (listado_vocales.hasOwnProperty(char)) {
        listado_vocales[char]++; // Incrementamos la vocal encontrada
        }
    }

    // Filtramos solo las vocales que aparecen
    let resultado = {};
    for (let vocal in listado_vocales) {
        if (listado_vocales[vocal] > 0) {
        resultado[vocal] = listado_vocales[vocal];
    }
    }
    let texto = Object.entries(resultado).map(([vocal, cantidad]) => `${vocal}: ${cantidad}`).join(", ");
    if(input_vocal.value ===""){
        output_vocal.textContent =""
    }
    else{
        output_vocal.textContent = "Vocales: "+texto;
    }
}
)

botonBorrarPeticion.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    input_peticion.textContent ="";
    input_estado.textContent = "";
    input_cabecera.textContent  = "";
    input_contenido.textContent  = "";
})     

botonBorrar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    input_palabra.value="";
    output_palabra.textContent = "";
})       

botonBorrarComparacion.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    output_comparacion.textContent="";
    input_numero1.value="";
    input_numero2.value="";
})   

botonBorrarFrase.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    input_frase.value = "";
    output_frase.textContent ="";
}) 
botonBorrarVocal.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    input_vocal.value = "";
    output_vocal.textContent ="";
}) 
botonComparar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    var numero_1 = parseInt(input_numero1.value);
    var numero_2 = parseInt(input_numero2.value);
    if(input_numero1.value==="" || input_numero2.value===""){
        output_comparacion.textContent =""
    }
    else if (numero_1 > numero_2) {
        output_comparacion.textContent = `El numero mayor es ${numero_1}`;
    } else {
        output_comparacion.textContent = `El numero mayor es ${numero_2}`;
    }
})  

 document.getElementById("input-numero2").addEventListener("keypress", function(event) {
    // Si la tecla no es un dígito, se cancela
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  });
 document.getElementById("input-numero1").addEventListener("keypress", function(event) {
    // Si la tecla no es un dígito, se cancela
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  });
 function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function obtenerInfo(url) {
    try {
        if(input_url.value != ""){
        input_peticion.textContent = "Iniciada";
        spinner.style.display = "inline"; // mostrar animación
        await sleep(2000);

        input_peticion.textContent = "Cargando...";
        await sleep(3000);

        let respuesta = await fetch(url);

        input_peticion.textContent = "Completada";
        spinner.style.display = "none"; // ocultar animación
        var peticion = respuesta.statusText;
        // Código de estado
        var estado = respuesta.status;
        
        // Cabeceras HTTP
        let cabeceras = [];
        respuesta.headers.forEach((valor, clave) => {
        cabeceras.push(`${clave}: ${valor}`);
        });
        let cabecera = cabeceras.join("\n");
        // Contenido
        let contenido = await respuesta.text();
        console.log({peticion , estado,cabecera,contenido})
        return {peticion , estado,cabecera,contenido}
    }

    } catch (error) {
        console.error("Error en la petición:", error);
    }
    }

botonURL.addEventListener("click", async function(event) {
  let datos = await obtenerInfo(input_url.value);
  input_estado.textContent = datos.estado;
  input_cabecera.textContent  = datos.cabecera;
  input_contenido.textContent  = datos.contenido;
});
