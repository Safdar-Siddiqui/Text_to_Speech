
const textToSpeak = document.getElementById('text-to-speak');
const speakButton = document.getElementById('speak-button');

const synth = window.speechSynthesis;

function speakText() {
const text = textToSpeak.value;
const utterance = new SpeechSynthesisUtterance(text);
synth.speak(utterance);
}

speakButton.addEventListener('click', speakText);