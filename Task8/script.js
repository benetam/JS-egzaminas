/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// function calculator(a,b,operator){
//     if (!a || !b){
//         return "Invalid number"
//     }
//     if (!['sum','sub','mul','div'].includes(operator)){
//         return "Invalid operator"
//     }
//     switch(operator){
//       case "sum":
//         return a + b;
//       case "sub":
//         return a - b;
//       case "mul":
//         return a * b;
//       case "div":
//         return a / b;
//      }
//     }
//     console.log(calculator(5,6,"sum"))

const math = {
    numbers : [x, y],
    add: function (x, y) {
        return x + y
    },
    multiply: function (x, y) {
        return x * y
    }
 }
 
 math.numbers;