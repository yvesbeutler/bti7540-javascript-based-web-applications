var alphabetString =
"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
"y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";

var input = 'Will the real Slim Shady please stand up?';

// Converts a single char into morse code
function charToMorseCode(char) {
  var idxStart = alphabetString.indexOf(char);
  var idxEnd = alphabetString.substr(idxStart).indexOf(';');

  if (idxStart >= 0 && idxEnd >= 0) {
    return alphabetString.substr(idxStart + 2, idxEnd - 2) + "   ";
  }
  return "[UNKNOWN]   ";
}

// Converts a string into morse code
function convertToMorse(inputStr) {
  if (inputStr.length > 0) {
    var word = inputStr.toLowerCase();
    var sequence = '';
    for (var i = 0; i < word.length; i++) {
      sequence += charToMorseCode(word.charAt(i));
    }
    return sequence;
  }

  return 'Error: No input found';
}

// launch
console.log(convertToMorse(input));