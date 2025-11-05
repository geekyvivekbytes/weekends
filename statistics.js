function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedData[i] < sortedData[j]) {
        const element = sortedData[j];
        sortedData[j] = sortedData[i];
        sortedData[i] = element;
      }
    }
  }
  return sortedData;
}


function sumOf(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum;
}

function mean(data) {
  return sumOf(data) / data.length;
}

function median(data) {
  const sortedList = sort(data);
  const medianIndex = (data.length - 1) / 2;
  return mean([sortedList[Math.ceil(medianIndex)], sortedList[Math.floor(medianIndex)]]);
}

function standardDeviation(data) {
  const average = mean(data);
  let sumOfSquare = 0;
  for (let index = 0; index < data.length; index++) {
    sumOfSquare += (data[index] - average) ** 2;
  }
  return Math.sqrt(sumOfSquare / data.length);
}


console.log(median([45, 33, 11, 4, 67, 55]));
console.log(`mean deviation of the recent runs score by Abhishek Sharma is`,
   standardDeviation([25, 68, 19, 22, 0, 5, 61, 65, 74, 38]));
console.log(`mean deviation of the runs score by Yashasvi Jaiswal in recent IPL is`,
   standardDeviation([1, 29, 4, 67, 6, 75, 51, 74, 49, 70, 13, 34, 50, 36]));
