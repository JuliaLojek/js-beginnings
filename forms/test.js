var myForm = document.forms.form1;
var message = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        message.innerHTML = "please enter your name";
        return false;
    } else{
        message.innerHTML = "";
        return true;
    }
};