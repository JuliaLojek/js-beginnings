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