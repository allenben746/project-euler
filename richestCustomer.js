const accounts = [[2,8,7],[7,1,3],[1,9,5]];
let highestCount = 0;

for (let i=0; i < accounts.length; i++){
	let total = 0;
	accounts[i].forEach(item => total = total + item)

	if (total > highestCount) {
		highestCount = total;
	}
}

console.log(highestCount)
