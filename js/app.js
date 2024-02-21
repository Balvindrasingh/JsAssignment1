// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

//declaring variable for button 1
var speakButton1 = document.querySelector('.button1');

//declaring and assigning array for Noun button
var textToSpeakNoun = ['The lion', 'The tiger', 'The bear', 'The giraffe', 'The zebra', 'The kangaroo', 'The penguin'];

//declaring variable for button 2
var speakButton2 = document.querySelector('.button2');

//declaring and assigning array for Verb button
var textToSpeakVerb = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];

//declaring variable for button 3
var speakButton3 = document.querySelector('.button3');

//declaring and assigning array for Adjective button
var textToSpeakAdjective = ['a happy', 'a sad', 'a grumpy', 'a cheerful', 'a shy', 'a confident'];

//declaring variable for button 4
var speakButton4 = document.querySelector('.button4');

//declaring and assigning array for Noun2 button
var textToSpeakNoun2 = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'kangaroo', 'penguin'];

//declaring variable for button 5
var speakButton5 = document.querySelector('.button5');

//declaring and assigning array for the settings button 
var textToSpeakSettings = ['under the bed','in the classroom','at the park','in the kitchen','on the roof'];

//declaring variable for read the story button
var speakButton6 = document.querySelector('.button6');

//declaring variable for random story button
var speakButton7 = document.querySelector('.button7');

//declaring the sentence array for the Read the story button 
 var sentence =new Array(); 
 
 //text.textContent(sentence);

 var text = document.querySelector('p');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


//this function takes an randon string from an array
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton1.onclick = function() {
	//storing a random string from textToSpeakNoun array to value1 variable
	var value1 = randomValueFromArray(textToSpeakNoun);
	speakNow(value1);	
	console.log(value1);     //dispalying to console
	sentence[0] =  value1;    //storing value to sentence array
	text.textContent = value1; // display the selected noun in the textbox
  }

speakButton2.onclick = function() {
	//storing a random string from textToSpeakVerb array to value2 variable
	var value2 = randomValueFromArray(textToSpeakVerb);   
	speakNow(value2);
	console.log(value2)    //dispalying to console
	 sentence[1] = value2;    //storing value to sentence array
	 text.textContent += " "+value2 ;   // adding verb to the end of the noun in the textbox
}

speakButton3.onclick = function() {

	//storing a random string from textToSpeakAdjective array to value3 variable
	value3 = randomValueFromArray(textToSpeakAdjective);
	speakNow(value3);
	console.log(value3);     //dispalying to console
    sentence[2] = value3;     //storing value to sentence array
	text.textContent += " "+value3;  //adding adjective with a comma and full stop at the end of the sentence in the textbox
 }

speakButton4.onclick = function() {
	//storing a random string from textToSpeakNoun2 array to value4 variable
    var value4 = randomValueFromArray(textToSpeakNoun2);
	speakNow(value4);
	console.log(value4);      //dispalying to console
	 sentence[3] = (value4);    //storing value to sentence array
	 text.textContent += " "+value4 ;   //adding comma and noun to the end
}

speakButton5.onclick = function() {
	//storing a random string from textToSpeakSettings array to value5 variable
	var value5 = randomValueFromArray(textToSpeakSettings);
	speakNow(value5);
	console.log(value5);   //dispalying to console
	 sentence[4] = value5;   //storing value to sentence array
	 text.textContent += " "+value5+ '.' ;   //adding comma and noun to the end

}

speakButton6.onclick = function() {
	console.log(sentence);     //dispalying to console
	speakNow(sentence);   
	sentence = [];        //emptying the sentence array
}

//declaring random sentance array
var randomSentence = new Array();

speakButton7.onclick = function() {

	//adding randon value from the texttoSpeak array to randomSentence array
randomSentence[0] = randomValueFromArray(textToSpeakNoun);
randomSentence[1] = randomValueFromArray(textToSpeakVerb);
randomSentence[2] = randomValueFromArray(textToSpeakAdjective);
randomSentence[3] = randomValueFromArray(textToSpeakNoun2);
randomSentence[4] = randomValueFromArray(textToSpeakSettings);
	console.log(randomSentence.join(" "));      //dispalying to console with a space instead of a comma
	speakNow(randomSentence);
	text.textContent = randomSentence;
	
	}
	
  randomSentence = [];     //emptying randomSentence array