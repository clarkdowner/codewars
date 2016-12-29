// https://www.codewars.com/kata/frequency-sequence/train/javascript

// Return an output string that translates an input string s by replacing each character 
// in s with a digit representing the number of times that character occurs in s and 
// separating digits with the character(s) sep.

function freqSeq(str, sep) {
	let returnString = '';
	let hashStore = {};

	for (let i = 0; i < str.length; i++) {
		let currChar = str.charAt(i);
		if (hashStore[currChar] === undefined) {
			hashStore[currChar] = 1;
		} else {
			hashStore[currChar] = hashStore[currChar] + 1;
		}
	}

	for (let j = 0; j < str.length; j++) {
		let currChar = str.charAt(j);
		if (j !== 0) {
			returnString += sep;			
		} 
		returnString += hashStore[currChar];		
	}

	return returnString;
}