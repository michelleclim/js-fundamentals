// Array.prototype
// here we are using IIFE so we can reuse array names per method
// params: required [, optional]


// concat()
// returns NEW array, doesn't alter existing arrays (copies)
(function() {
var array1 = [1,2,3];
var array2 = ["a", "b", "c"];
var array3 = array2.concat(array1, ['dog', 'cat'], 'woof');
//console.log(array3);
}());


// copyWithin()
// shallow copies part of an array to another location in same array. Array size stays the same
// param: target [, start, end]
// target = what you want copied
// start = starting index to paste, end = up to, not including end
(function(){
	var array = [1,2,3,4,5,6];
	array.copyWithin(-4, 4);
	//console.log(array);
}());


// entries()
// returns new array iterator object with key/value pairs
(function(){
	var array = [1,2,3,4,5];
	var entriesArray = array.entries();
	// for (let e of entriesArray) {
	// 	console.log(e);
	// }
}());


// every()
// tests if all elements pass provided function (returns boolean)
(function(){
	var array = [1,2,3,4,5];
	function positiveNum(e){
		return e > 0;
	}
	var checkPass = array.every(positiveNum);
	//console.log(checkPass);

}());


// fill()
// fills all elements of an array with static value
// params: value [, start, end]
(function(){
	var array = [0,1,2,3,4,5];
	array.fill(4, 0, 1);
	//console.log(array);
}());


// filter()
// creates new array with elements that pass test
// params: callback [, thisArg]
(function(){
	var array = [-1,0,1,2,3,4,5];
	function checkNum(value) {
		return value > 0;
	}
	var newArray = array.filter(checkNum);
	//console.log(newArray);

	var newobject = [
		{id: 123, name: 'john'},
		{id: 2, name: 'rob'},
		{id: null, name: 'bob'},
		{id: 33, name: 'josh'}
	]
	function existingId(item) {
		return item.id;
	}
	var newerobject = newobject.filter(existingId);
	//console.log(newerobject);
}());


// find()
// returns (first) value in array that satisfies test; otherwise returns undefined
(function(){
	var array = [1,2,3,4,5];
	function checkNum(value) {
		return value > 2;
	}
	var arrayNew = array.find(checkNum);
	//console.log(arrayNew);
}());


// findIndex()
// returns index of value that satisfies test; otherwise returns -1
(function(){
	var array = [1,2,3,4,5];
	function checkNum(value) {
		return value > 2;
	}
	var newArray = array.findIndex(checkNum);
	//console.log(newArray);
}());


// forEach()
// executes function once per element
(function(){
	var array = [1,2,3,4,5];
	var newArray = [];
	function add(e) {
		newArray.push(e+2);
	}
	array.forEach(add);
	//console.log(newArray);
}());


// includes()
// checks if array includes certain element, returns boolean
// params: searchElement [, fromIndex]
(function(){
	var array = [0,1,2,3,4,5];
	//console.log(array.includes(3));
}());


// indexOf()
// returns (first) index of given element; otherwise returns -1
(function() {
	var array = [1,2,3,4,5];
	//console.log(array.indexOf(4));
}());


// join()
// joins all elements of an array into string
// param: [separator]
(function(){
	var array = ['apple', 'banana', 'cherry', 'dragonfruit'];
	var fruits = array.join(', ');
	//console.log(fruits);
}());


// keys()
// returns new Array Iterator that contains keys of each index in array
(function(){
	var array = ['a', 'b', 'c', 'd'];
	var iterator = array.keys();
	//console.log(iterator.next());
}());



// pop()
// removes and returns last element of array
(function(){
	var array = [0,1,2,3,4,5];
	array.pop();
	//console.log(array);
}());


// push()
// adds element(s) to end of array and returns new array length
(function(){
	var array = [1,2,3,4,5];
	array.push(6);
	//console.log(array);
}());



// reduce()
// applies function against accumulator and each value of array to reduce to a single value
// params: callback [, initialValue]
(function(){
	var array = [0,1,2,3,4,5];
	var newNum = array.reduce(function(acc, num){
		console.log(acc);
		console.log(num);
		return acc + num;
	});
	//console.log(newNum);
}());
