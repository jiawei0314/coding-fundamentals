const numbers = ([1, 2, 3, 4])

const a = sum(numbers)

function sum(numbers){

    let a = 0

    for(i=0; i<numbers.length; i++){

    a += numbers[i]
    }

    return a

}

console.log(a)