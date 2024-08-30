

function sum(a,b){
    return a + b;
}
let ans = sum(20,30)
console.log(ans);

// ********* sumOfParseInt ******************

function sumOfParseInt(a,b){
    return parseInt(a) + parseInt(b);
}
let ansParseInt = sumOfParseInt("20",30)
console.log(ansParseInt);

// ********************************

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const sumOfN = sum(2);
console.log(sumOfN);