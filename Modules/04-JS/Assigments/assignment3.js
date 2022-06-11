// function factorial(number){

//     const n = number;

//     for (let i=1; i < number.length; i++){
//         n *= number[i]
//     }

//     return n;
// }
// console.log(factorial(5))


function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  console.log(factorialize(5));