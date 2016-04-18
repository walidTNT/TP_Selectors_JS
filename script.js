/**
 * Created by WalidT on 18/04/2016.
 */

/*var testFunction = function testFunction(){
    alert("test");
}

 */

/*document.getElementById("menu1").addEventListener("click", function(){
    document.getElementById("p").innerHTML = "Hello World";
});


document.getElementById("menu2").addEventListener("mouseover", function(){
    document.getElementById("item2").style.background = "yellow";
});

var newItem = document.createElement("li");
var newText = document.createTextNode("Item 5");

newItem.appendChild(newText);
document.getElementsByTagName("li")[3].appendChild(newItem);*/


var yannick = document.getElementById("1");
var walid = document.getElementById("2");
var amelie = document.getElementById("3");







yannick.addEventListener("click", function(){
    var temp = yannick.innerText;
    yannick.innerHTML = amelie.innerText;
    amelie.innerHTML = temp;
    if(walid.style.background == "red" || walid.style.background ==  "green"){
        walid.style.background = "blue";
    } else {
        walid.style.background = "green";
    }

});