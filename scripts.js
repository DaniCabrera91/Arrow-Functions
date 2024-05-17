// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:

// function greetings() {
//   return "Hola";
// }

const greetings = () => {
    return 'hola'
} 
console.log(greetings());


// Convierte la siguiente función en una función flecha en línea:

// function division(a,b) {
//   return a / b;
// }

let division = (a,b) => a/b
console.log (division (4,2))


// Convierte la siguiente función en una función flecha:

// function myName(name) {
//   return `Mi nombre es ${name}`;
// }

const myName = (name) => `Mi nombre es ${name}`
console.log(myName("Dani"));


// Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

let test2 = () => console.log('Función test 2 ejecutada.');
let test1 = (callback) => callback();
test1(test2);

// 2. Foreach

// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let people = [
 { name: 'Jamiro', age: 45 },
 { name: 'Juan', age: 35 },
 { name: 'Paco', age: 34 },
 { name: 'Pepe', age: 14 },
 { name: 'Pilar', age: 24 },
 { name: 'Laura', age: 24 },
 { name: 'Jenny', edad: 10 },
]
    

// Crea un array con la gente mayor de 25 años y muéstralo por consola.

const adults = []
people.forEach ((ages) => {
  if (ages.age > 25) {
    adults.push(ages)
  }
} )

console.log(adults);
// Crea un array con la gente que empieza por J. 

const firstJ = []
 people.forEach ((firstName) => { 
 if  (firstName.name [0] === 'J') {
      firstJ.push (firstName)
 }
})
console.log (firstJ)


// 3. Map

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const masDe25 = []
people.map ((ages) => {
  if (ages.age > 25 )
    masDe25.push (ages)

})
console.log (masDe25)


// Crea un array con la gente que empieza por J. 

const initialJ = []
 people.forEach ((letter) => { 
 if  (letter.name [0] === 'J') {
      initialJ.push (letter)
 }
})
console.log (initialJ)


// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers1 = [ 4, 5, 6, 7, 8, 9, 10]
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const elevarsimismo =numbers1.map((numero)=>
  Math.pow(numero,numero))

console.log (elevarsimismo)


// 4. Filter

// Crea un segundo array que devuelva los impares
 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let odd = numbers2.filter( number => number % 2 != 0);
 console.log('Los números impares son:', odd);


// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList1 = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ]

// const vegan = foodList.filter(platos => platos.isVeggie)
// vegan.forEach(veganen => {
// console.log ('Que rico ' +veganen.name+' me voy a comer! ') 
// });

// let vegan = foodList1.filter(foodName => foodName.isVeggie)
// console.log('Que rico', vegan.name, 'me voy a comer!');
const vegan = foodList1.filter(foodName => foodName.isVeggie)
vegan.forEach(veggiePlate => {
  console.log (`Que rico ${veggiePlate.name} me voy a comer!`)  
});
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numbers3 = [39, 2, 4, 25, 62]
const result = numbers3.reduce((a, b)=> a*b)
console.log(result)
// Salida--> 483600


// Extras

// Map

// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
]

const staffMembers = staff.map((members)=>{
    return `${members.name} es ${members.role} y le gusta ${members.hobbies[0]} y ${members.hobbies[1]}`
})

console.log(staffMembers);

// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */


// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const foodArray = foodList2.map((plate)=>{
    switch (plate) {
        case 'Pizza':
          return 'Como soy de Italia, amo comer Pizza';
        case 'Ramen':
          return 'Como soy de Japón, amo comer Ramen';
        case 'Paella':
          return 'Como soy de Valencia, amo comer Paella';
        case 'Entrecot':
          return 'Aunque no como carne, el Entrecot es sabroso';
    
        default:
          return "Error"; 
    }        
})
console.log(foodArray);

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/


// Filter

// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];

    let products = inventory.filter( (product) => product.price > 300);
    console.log (products)

      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */

// Reduce

// Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
    'Me',
    'llamo',
    'Dani',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
const phrase = sentenceElements.reduce((word1, word2)=> word1 + ' ' + word2) 
console.log(phrase);
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'


