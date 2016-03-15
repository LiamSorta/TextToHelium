//By https://github.com/LiamSorta || @LiamSorta

function genericOnClick(info, tab) {
	speak(JSON.stringify(info.selectionText));	
}

function test(info){
	alert(JSON.stringify(info.selectionText));
}

var context = "selection";
var title = "Say text with TextToHelium";
var id = chrome.contextMenus.create({"title": title, 
									"contexts":[context],
									"onclick": genericOnClick});
console.log("'" + context + "' itesm:" + id);



