var program = require('commander');
var args = process.argv;
var flagsPresent = [];

program
  .option('-s, --sum', 'sum')
  .option('-p, --product', 'product')
  .parse(process.argv);

args.forEach(function(item){
	if(item === '--sum' || item === '--product'){
		flagsPresent.push(item);
	}
});

if(!program.sum && !program.product) {
	throw 'error: incorrect number of flags present';
}

var isNumber = function(x) {
	return !isNaN(parseFloat(x));
}

var numbers = args.filter(isNumber).map(parseFloat);
var result;

if(program.sum) {
	result = numbers.reduce(function(a,b){ return a + b; });
}

if(program.product) {
	result = numbers.reduce(function(a,b){ return a * b; });
}
console.log("result is %d", result);
