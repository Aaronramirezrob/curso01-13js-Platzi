//var, let, const  .. let permite cambiar el valor de nuestras variables en el futuro .. las variables de tipo const no pueden cambiar de valor .. su valor será siempre el mismo.

## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

ejemplo: 

let nombre = "aaron" // Declarar
nombre = "aaron" // Inicializar

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
forma de encapsular el codigo para que sean reutilizables y ejecutables en el futuro.

ej:
function nombreCompleto (nombre,apellido) {
    return nombre + " " +  apellido
}

- ¿Cuándo me sirve usar una función en mi código?

Nos sirve cuando tenemos variables o bloques de código similares con cambios que podrían ser parametros y argumentos que podemos encapsular para reutilizar en el futuro.

Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Parametros: reciben una función cuando la estamos creando . Las funciones reciben parametros.

Argumentos: El resultado de los parametros.


EN RESUMEN : LAS FUNCIONES RECIBEN PARAMETROS CUANDO LAS CREAMOS. Y LES ENVIAMOS ARGUMENTOS CUANDO LAS EJECUTAMOS.
### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
---------------------------------------------------------------
function saludo(name, lastName, nickname) {
    
    const completeName = nombreCompleto(name, lastName);
    const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); 
}
-----------------------------------------------------------------
## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Forma en la que ejecutamos un bloque de código que dependen de alguna condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

else, if, else if, switch, ternarios.

- ¿Puedo combinar funciones y condicionales?
Si. las funciones pueden encapsular cualquier bloque de código. Incluso las condicionales

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

let tipoDeSubscripcion = ["Free","Basic", "Expert", "Expert Duo"]
if (tipoDeSubscripcion == 0) {
    console.log("Solo puedes llevar cursos gratuitos")
} else if (tipoDeSubscripcion == 1) {
    console.log("Tienes una subscipción mensual")
} else if (tipoDeSubscripcion == 2) {
    console.log("Tienes una subscipción anual individual")
} else if (tipoDeSubscripcion == 3) {
    console.log("Tienes una subscipción anual grupal")
} else {
    console.log ("Que no se te olvide que también hay PLATZI EMPRESAS!!")
}
```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function (){
    if(basic){
            //aqui termina la función
            return;
    } else if (){

    }
}

console.warn("NO EXISTE");

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

const ejemploSuscripcion = "Free"

conseguirTipoSuscripcion(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDesuscripciones[suscripcion])
        return;
    }

    console.warn("Este tipo de suscripción no existe")


}


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

Forma de ejecutar un bloque de codigo hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?

for, while, do while.

- ¿Qué es un ciclo infinito y por qué es un problema?
Cuando nuestra condición nunca se cumple. Los ciclos se siguen ejecutando y dejan de funcionar. 
- ¿Puedo mezclar ciclos y condicionales?

Si, de por si los ciclos son una especie de condicional. Nada nos impide agregar mas condicionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
let i = 0;
while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while( i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
```
let respuesta;

while (respuesta != "4") {
    let pregunta = prompt("¿Cuánto es 2 + 2?");
    respuesta = pregunta; 
}
```
## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

    Una lista de elementos.

    const array = [1, "hola", true, false];

- ¿Qué es un objeto?

    Una lista de elementos, pero cada elemento tiene un nombre clave. 

    const obj = {
        num: 1,
        name: "Aaron",
        edad: 3,
    }

- ¿Cuándo es mejor usar objetos o arrays?

    Arrays cuando lo que hacemos en un elemento es lo mismo que en tosos los demás (la regla se puede inclumplir). Mientras que en un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    
    Si, se pueden guardar arrays dentro de objetos y objetos dentro de un array.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirPrimerElementoArray (arr) {
    console.log(arr[0]);
}

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirElementoPorElemento (arr) {
    for( let i = 0; i < arr.length ; i++){
        console.log(arr[i])
    }
}

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const obj = {
    nombre: "Aaron",
    edad: 30,
    comidaFav: "Ceviche",
}

Object.values() --> nos ayuda a crear un array con las propiedades de un objeto.

Object.values(obj)

function imprimirElementoPorElemento(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}