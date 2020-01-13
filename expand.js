function setUpEvents(){

    var article = document.getElementById("content");
    var button = document.getElementById("show-more");

    // button.onclick = function(){
    //     article.setAttribute("class", "open");
    // };

    button.onclick = function(){
        if(article.className == "open"){
            article.className = "";
            button.textContent = "Show more";
        } else{
            article.className = "open";
            button.textContent = "Show less";
        }
    };
}

window.onload = function(){
    setUpEvents();
};





var discoBox = document.getElementById("disco");
var colors = ["crimson", "deepPink", "gold", "lightSeaGreen", "midnightBlue", "seaGreen", "pink", "indigo", "aqua", "salmon"];
var counter = 0;

function colorChange(){
    if(counter >= colors.length){
        counter = 0;
    }

    discoBox.style.backgroundColor = colors[counter];
    counter++;
}

var myTimer = setInterval(colorChange, 50);

discoBox.onclick = function(){
    clearInterval(myTimer);
    discoBox.textContent = "This is your color!";
};