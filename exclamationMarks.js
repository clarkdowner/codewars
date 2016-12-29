// https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right/train/javascript

function remove(s,n) {
  for (let i = n; i >0; i--) {
  	let index = s.indexOf('!');
  	if (index > -1) {
  		s.splice(index, 1);
  	}
  }
  return s;
}