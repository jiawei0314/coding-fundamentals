function calculateAge(date){

    const birthDate = new Date (date);
    const todayDate = new Date ();
    const age = todayDate.getFullYear() - birthDate.getFullYear();

    return age;
}

console.log(calculateAge('03/03/1997'))

