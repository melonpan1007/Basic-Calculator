const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
    display.value = eval(display.value);//eval() function its a calculator in its own
}
catch(error){
    display.value="Error";
}
}