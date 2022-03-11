//cek type number genap ganjil
function checkTypeNumber(givenNumber){
    if(givenNumber % 2 === 0  && typeof givenNumber === "number"){
        return "Genap";
    }else if(givenNumber % 2 === 1 && typeof givenNumber === "number"){
        return "Ganjil";
    }else if(typeof givenNumber !== "number"){
        return "Error: Invalid data type";
    }
    
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
