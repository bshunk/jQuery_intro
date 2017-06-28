console.log("jQuery!!!!");

// var vanillaStuff = document.getElementById("list-of-stuff");
// console.log("DOM element", vanillaStuff);
// vanillaStuff.classList.add("myList");

var jQStuff = $("#list-of-stuff");
console.log("JQ", jQStuff);

jQStuff.addClass("myList");
jQStuff.append("<li>Hamburgers</li>");
// jQStuff.prepend("<li>Hamburgers</li>");

let album = $(".container").find(".album")[0];
console.log("album", album);

let oneAlbum = $(".container")


let parentAttr = $(".album").parents(".song-container").attr("name")
console.log("parentAttr", parentAttr);

// click events

$(document).on("click", "#destroyer", function() {
	$(".container").toggle();
});

$("body").append('<button id="destroyer">Hide songs</button>');



// AJAX
// OLD WAY
// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", function () {
// 	var data = JSON.parse(this.responseText);
// 	console.log("data", data);
// });
// myRequest.open("GET", "songs.json");
// myRequest.send();

// NEW WAY
$.ajax({
	url: "songs.json"
})
.done(executeAfterAjax)
.fail( function(error) {
	console.log(error.statusText);
});

function executeAfterAjax(data) {
	console.log(data.songs);
	let songs = data.songs
	$.each(songs, function(index, song) {
		console.log("song", song);
		$("#song-list").append(`<li>${song.title}</li>`)
	});
}


// ADD CSS BY JQUERY
$("div").css({"color": "darkgreen", "font-size": 28});

$(document).on("click", "button[id^='button-']", function() {
	$(this).parents(".container").remove();
});




























