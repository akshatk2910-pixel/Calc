const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function Calculate(){
    try{
      //   display.value = eval(display.value);
        display.value = "I Like you ❤️";
    }
    catch(error){
        display.value = "Error"
    }
}

