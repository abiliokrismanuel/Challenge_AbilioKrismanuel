//change word
function changeword(selectedText,changeText,text){
    var re = new RegExp(selectedText, "g");
    text = text.replace(re,changeText);
    return text;
}

const kalimat1 = "andini sangat mencintai kamu selamanya"
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(changeword('mencintai','membenci',kalimat1))
console.log(changeword('bromo','semeru',kalimat2))
