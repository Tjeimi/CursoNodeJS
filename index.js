/*
var nome = "Vagner"
var sobrenome = "Vogel"
var idade = 42
var estudante = true
console.log("Olá, me chamo " , nome , sobrenome , " e tenho " , idade , " anos de idade ");
*/
/*
var nome = prompt("Digite o seu nome");
var idade = prompt("Qual a sua idade?");
console.log (typeof nome)
console.log(typeof idade)
*/

// OPERADORES ARITMÉTICOS
/*    SOMA
const primeiroValor = 10
const segundoValor = 20
const resultado = primeiroValor + segundoValor + 4
console.log(resultado) //34

//    SUBTRAÇÃO
const valor1 = 10
const valor2 = 20
const valor3 = valor2 - valor1
console.log(valor3) // 10
*/
/*
//    MULTIPLICAÇÃO
const valorA = 10
const valorB = 25
const valorC = valorB * valorA
console.log(valorC)  // 250
*/
/*
//    DIVISÃO
const valorX = 345
const valorY = 10
const valorZ = valorX / valorY
console.log(valorZ) // 34.5
*/
/*
//    RESTO DA DIVISÃO
const restoDaDivisao = 11 % 4
console.log(restoDaDivisao) // 3
*/
/*
//  >>> EXERCICIO 1 <<<
// A)
var a = 3
var b = 4
var c = a + b
console.log(c) // 7
*/
/*
// B)
var valorA = 3
var valorB = 5
var valorC = valorA * valorB
console.log(valorC / 2) // 7.5
*/
/*
// C)
var valor1 = 5
var valor2 = 4
var valor3 = valor1 - valor2
console.log(valor3 * -1) // -1
*/
/*
// D)
var restoDivisao = 234 % 5
console.log(restoDivisao) // 4
*/
/*
//   >>> EXERCICIO 2 <<<
// A)
var a = 2
var b = 3
console.log(a === b) // false
*/
/*
// B)
var valorA = 4
var valorB = 3
console.log(valorA !== valorB) // true
*/
/*
// C
var num1 = 5
var num2 = 2
console.log(num1 > num2) // true
*/
/*
// D
var numA = 2
var numB = 9
console.log(numA < numB) // true
*/
//   >>> EXERCICIO 3 <<<
/*
var a = true
var b = false
var c = true
console.log(a && b); // false
console.log(b && c); // false
console.log(a && c); // true
console.log(a && b && c); // false
*/
/*
//   >>> EXERCICIO 4 <<<
var a = true
var b = false
var c = true
console.log(a || b); // true
console.log(b || c); // true
console.log(a || c); // true
console.log(a || b || c) // true
*/
//   >>> EXERCICIO 5 <<<
var nome = prompt("Digite o seu nome");
console.log(nome);
var anoNascimento = prompt("Digite o ano em que nasceu");
console.log(anoNascimento);
var anoAtual = 2024;
var anoFinal = 2050;
var anoTotal = anoAtual - anoNascimento;
console.log(`${nome}, você tem ${anoTotal} anos de idade.`)
//console.log(anoTotal);
console.log("É de maior? " , anoTotal >= 18);
var anoTotal = anoFinal - anoNascimento;
console.log(`${nome}, você terá ${anoTotal} anos de idade em ${anoFinal}.`);






