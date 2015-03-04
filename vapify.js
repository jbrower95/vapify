

var romanStatuePath = "romanStatue.png";
var nintendoPath = "n64.png";
var MAX_ELTS = 10;

function init(){
	var numNodes = Math.floor(Math.random() * MAX_ELTS);
	var pictures = ['headone.png','headtwo.png','url.png', 'win95.png'];
	for (var i = 0; i < numNodes; i++){
		var elt = document.createElement("img");
		elt.src = chrome.extension.getURL("./images/" + pictures[Math.floor(Math.random()*pictures.length)]);
		elt.style.position = "fixed";
		elt.style.left = Math.floor(Math.random()*screen.width) + "px";
		elt.style.top = Math.floor(Math.random()*screen.height) + "px";
		elt.style.zIndex = "99";
		document.body.appendChild(elt);
	}

}

init();