// Write your code here!
var element = document.getElementById("main");
element.parentNode.removeChild(element)
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Emma is the champion"