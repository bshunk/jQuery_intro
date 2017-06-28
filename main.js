console.log("jQuery!!!!");

var vanillaStuff = document.getElementById("list-of-stuff");
console.log("DOM element", vanillaStuff);
vanillaStuff.classList.add("myList");

var jQStuff = $("#list-of-stuff");
console.log("JQ", jQStuff);

jQStuff.addClass("myList");
// jQStuff.append("<li>Hamburgers</li>");
jQStuff.prepend("<li>Hamburgers</li>");







