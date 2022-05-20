function missingLetter(str){

    let start = str.charCodeAt(0);
    let finish = str.charCodeAt(str.length - 1);

    for (let i = start; i <= finish; i++){
        let answer = String.fromCharCode(i);
        let strInput = str[i - start];

        if (answer !== strInput){
            return answer;
        }
    }
}

console.log(missingLetter("abce"));

console.log(missingLetter("abcdefghjklmno"));

console.log(missingLetter("stvwx"));

console.log(missingLetter("bcdf"));

console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));




