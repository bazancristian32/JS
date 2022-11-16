const pizzas = [
  {
    nombre: "Muzza",
    ingredientes: " muzza",
    precio: 1000,
    id: 1,
  },
  {
    nombre: "Jamon y Morron",
    ingredientes: [" muzzarella", " jamon", " morron"],
    precio: 300,
    id: 2,
  },
  {
    nombre: "Jamon y Huevo",
    ingredientes: [" muzzarella", " jamon", " huevo"],
    precio: 700,
    id: 3,
  },
  {
    nombre: "Salchicha con papitas",
    ingredientes: [" muzzarella", " salchicha", " papitas"],
    precio: 250,
    id: 4,
  },
  {
    nombre: "Calabresa",
    ingredientes: [" calabresa", " muzzarella"],
    precio: 500,
    id: 5,
  },
  {
    nombre: "Napolitana",
    ingredientes: [" muzzarella", " tomate", " jamon"],
    precio: 850,
    id: 6,
  },
];

console.log(`Impar : `);
const idInpares = pizzas.filter((pizzas) => {
  return pizzas.id % 2 === 1;
});
idInpares.forEach((pizzas) => {
  console.log(`Las pizza de ${pizzas.nombre} tiene id impar`);
});

console.log(`Nombre de las pizzas : `);
const nombreYprecio = pizzas.forEach((pizzas) => {
  console.log(`El precio de ${pizzas.nombre} es de $${pizzas.precio}`);
});

console.log(`Todos los ingredientes: `);
const ingredientesDePizza = pizzas.forEach((pizzas) => {
  console.log(
    `Los ingredientes de ${pizzas.nombre} son:${pizzas.ingredientes}`
  );
});

// NO ME SALE console.log(`Menor a $600 : `);

// const pizza = (precio) => {
//   const pizzasMenorA = pizzas.filter ((precio) => {
//     return pizzas.precio < precio;
//   });
//   return pizzasMenorA;
// }
// console.log (pizza (600))
