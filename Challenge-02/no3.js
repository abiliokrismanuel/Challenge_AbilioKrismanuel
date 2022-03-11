//Regex Check Email
function checkEmail(email){
    var mail_regex_valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var mail_regex_invalid =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]/;
    
    if (email.match(mail_regex_valid)) {
        return "VALID";
    }else if(email.match(mail_regex_invalid)){
        return "INVALID";
    }else{
        return "ERROR";
    }
    
}


console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))