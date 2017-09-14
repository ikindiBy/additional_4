module.exports = function multiply(first, second) {
 	let resultNumber = (+first)*(+second);
	let str = '';
 while (resultNumber != 0 ) {
 	let last = resultNumber % 10;
  	resultNumber = (resultNumber - last)/10;
 	str = str + last;
 }
 return str.split('').reverse().join('');
}
