
// Get references to the DOM elements
const textToSpeak = document.getElementById('text-to-speak');
const speakButton = document.getElementById('speak-button');

// Initialize the speech synthesis API
const synth = window.speechSynthesis;

// Function to speak the text
function speakText() {
const text = textToSpeak.value;
const utterance = new SpeechSynthesisUtterance(text);
synth.speak(utterance);
}

// Add an event listener to the button
speakButton.addEventListener('click', speakText);