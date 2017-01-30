var args = process.argv;
var flagsPresent = [];

args.forEach(function(item){
	if(item === '--sum' || item === '--product'){
		flagsPresent.push(item);
	}
});

if(flagsPresent.length !== 1) {
	throw 'error: incorrect number of flags present';
}

var isNumber = function(x) {
	return !isNaN(parseFloat(x));
}

var numbers = args.filter(isNumber).map(parseFloat);
var result;

if(flagsPresent[0] === '--sum') {
	result = numbers.reduce(function(a,b){ return a + b; });
}

if(flagsPresent[0] === '--product') {
	result = numbers.reduce(function(a,b){ return a * b; });
}
console.log("result is %d", result);
