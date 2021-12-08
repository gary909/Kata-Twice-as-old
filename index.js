function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let ans = dadYearsOld - sonYearsOld * 2;
    return Math.abs(ans); // Math.abs removeds any '-' signs
}

console.log(twiceAsOld(36,7)); // Return 22
console.log(twiceAsOld(55,30)); // Return 5
console.log(twiceAsOld(42,21)); // Return 0
console.log(twiceAsOld(22,1)); // Return 20
console.log(twiceAsOld(29,0)); // Return 29