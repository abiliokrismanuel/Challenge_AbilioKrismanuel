function getAngkaTerbesarKedua(dataAngka){
    try {
        var max = Math.max.apply(null, dataAngka);
        dataAngka.splice(dataAngka.indexOf(max), 1);
        return Math.max.apply(null, dataAngka);
    } catch (error) {
        return "Error: kamu jelasin ini error nya apa dan kenapa";    
    }

}
const dataAngka = [9,4,7,7,4,3,8,2,2]

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());