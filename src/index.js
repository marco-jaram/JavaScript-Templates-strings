import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JavaScrpt</h1>
<div>
  Templates string alt + 96
 
</div>
`;
// del nuevo javascritp

const numero = (num1, num2) => {
  return `numero es: ${num1 + num2}`;
};
const resultado = numero(10, 20);
console.log(resultado);

//lo mimso pero con la funcion de flecha
const numero2 = (num1, num2) => `numero es: ${num1 + num2}`;

const resultado2 = numero2(10, 20);
console.log(resultado2);
