let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//removes the last word, logs it to the console, and display the new array length
removed = secretMessage.pop();
console.log(removed);
console.log(secretMessage.length);

//adds two new words to the end of the array
added = secretMessage.push("to", "Program");

//changes the word "easily" to "right"
console.log(secretMessage.indexOf("easily"));
secretMessage[7] = "right";
console.log(secretMessage[7]);

//removes the first word and logs it to the console
shifted = secretMessage.shift();
console.log(shifted);

//adds a new word to the begining of the array
unshifted = secretMessage.unshift("Programming");
console.log(secretMessage[0]);

//finds the index range btw get and time then replaces them with "know"
console.log(secretMessage.indexOf("get"));
console.log(secretMessage.indexOf("time"));
console.log(secretMessage.slice(6, 10));
secretMessage.splice(6, 5, "know");
console.log(secretMessage);