

let textbox = document.getElementById("textbox");


function appendTodisplay(input){
    const textbox = document.getElementById("textbox");
    textbox.value += input;
}

function calculater(textbox){
   
     try {
        textbox.value = Number(eval(textbox.value));
     } catch (error) {
        textbox.value = " Errors";
     }
}
function mera(){

let textbox = document.getElementById("textbox");
   // alert("gggg");
   textbox.value = "";
}


