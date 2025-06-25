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
  if (!arr || arr.length === 0) return 0; 
  return arr.reduce((sum, num) => sum + num, 0); 
} 
console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10))

function differenceMaxMinWorker(...arr) {
if (!arr || arr.length === 0) return 0; 
  let min = Math.min(...arr); 
  let max = Math.max(...arr); 
  return max - min; 
}

console.log(differenceMaxMinWorker()); 
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));



  function differenceEvenOddWorker(...arr) {
if (!arr || arr.length === 0) return 0; 
  let sumEven = 0; 
  let sumOdd = 0; 
   
  for (let num of arr) { 
    if (num % 2 === 0) { 
      sumEven += num; 
    } else { 
      sumOdd += num; 
    } 
  } 
   
  return sumEven - sumOdd; 
}

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));



function averageEvenElementsWorker(...arr) {
if (!arr || arr.length === 0) return 0; 
  let sumEven = 0; 
  let countEven = 0; 
   
  for (let num of arr) { 
    if (num % 2 === 0) { 
      sumEven += num; 
      countEven++; 
    } 
  } 
   
  return countEven === 0 ? 0 : sumEven / countEven; 
}

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));



function makeWork (arrOfArr, func) {

}
