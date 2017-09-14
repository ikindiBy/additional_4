module.exports = function multiply(first, second) {
  let resultNumber =  (+first)*(+second);
 let str = '';
 while (resultNumber != 0 ) {
 	str += resultNumber % 10;
 	resultNumber = (resultNumber - str)/10;
 }
 return str.split('').reverse().join('');
}
