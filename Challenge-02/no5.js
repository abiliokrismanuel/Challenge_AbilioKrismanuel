//split string 
function getSplitName(personName){
    var name = personName.split(" ");
    const [firstName,MiddleName,LastName] = name;
    try {
        if (name.length === 2) {
            return {firstName:name[0],MiddleName:null,LastName:name[1]};
        }else if(name.length === 1){
            return {firstName:name[0],MiddleName:null,LastName:null};
        }else if(name.lenght > 3){
            return "Error: This function is only for 3 character"
        }else{
            return {firstName,MiddleName,LastName};
        }  
    } catch (error) {
        return "Error: kamu jelasin ini error nya apa dan kenapa";
    }
}

console.log(getSplitName("aldi daniela pranata"));
console.log(getSplitName("dwi kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora aureliya sukma darma"));
console.log(getSplitName(0));
