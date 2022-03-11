//password isvalid
function isValidPassword(password){
    var regex_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
    try {
        if(password.match(regex_pass)){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        return "Error: kamu jelasin ini error nya apa dan kenapa";
    }
}


console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("meong2"));
console.log(isValidPassword(0));