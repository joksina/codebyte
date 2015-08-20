//longest word
function count(str){
	var coll = str.split(" ");
	return coll.reduce(function(accum, curr){
	var longest;
		if(accum.length > curr.length){
		longest = accum;

		}else{
		longest = curr;
		}
		return longest;
	})
}

//lettercount
function letterCount(str){
	var coll = str.split("");
	return coll.reduce(function(accum, curr){
		if(accum[curr]){
			accum[curr] += 1;
		}else{
			accum[curr] = 1;
		}
		return accum;
	},{})
}

//letter reverse
function reverse(str){
	var coll = str.split("");
	return coll.reduce(function(accum, curr, index, arr){
		return accum + arr[arr.length - index - 1]
	},"");
}

//first factorial
function factorial(number){
  return Array.apply(0, Array(number)).reduce(function(accum, curr, index) { return accum + accum * index; }, 1);
}

// prime number
function isPrime(num){
	
}