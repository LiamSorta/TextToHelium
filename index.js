//By https://github.com/LiamSorta || @LiamSorta
//
//Special thanks to Matt West

function loadVoices() {
	var voices = speechSynthesis.getVoices();
	voices.forEach(function(voice, i) {
		if(voice.name == "Google UK English Female"){
			thisVoice = voice;
		};
	});
}
loadVoices();

window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};

speak = function(text) {
	var msg = new SpeechSynthesisUtterance();
  
	msg.text = text;
  	msg.volume = 1;
	msg.rate = 1.2;
	msg.pitch = 1.7;
	msg.voice = thisVoice;

	window.speechSynthesis.speak(msg);
}
