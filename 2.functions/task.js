function getArrayParams(...arr) {
	let min, max, avg, sum;
	sum = 0;
	min = 0;
	max = 0;
	if (arr.length == 1) {
		min = arr[0];
		max = arr[0];
		sum = arr[0];
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i]
			} else if (arr[i] < min) {
				min = arr[i]
			}
			sum += arr[i];
		}

	}

	if (arr.length) {
		avg = (sum / arr.length).toFixed(2);
		avg = Number(avg);
	}

	return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10)
getArrayParams(1, 2, 3, -100, 10)
getArrayParams(5)











function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
