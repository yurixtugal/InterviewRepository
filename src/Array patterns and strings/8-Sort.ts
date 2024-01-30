const bubbleSort = (arr: number[]): number[] => {
  let isSwapped = false;
  let lastIndexCounter = arr.length-1;
  do{
    isSwapped = false;
    for (let i = 0; i < lastIndexCounter;i++){
      if (arr[i] > arr[i+1]){
        const tempValue = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tempValue;
        isSwapped = true;
      }
    }
    lastIndexCounter--;
  } while (isSwapped)

  return arr;
}

const selectionSort = (arr: number[]): number[] => {
  let n = arr.length;
  for (let i =0 ; i < n;i++){
    let minorIndex = i;
    for (let j = i+1; j < n; j++){
      if (arr[minorIndex]>arr[j]){
        minorIndex = j;
      }
    }
    const tempValue = arr[i]
    arr[i] = arr[minorIndex];
    arr[minorIndex] = tempValue;
  }
  return arr;
}


const array = [5,1,6,3,9];
console.log(bubbleSort(array).join(","));
console.log(selectionSort(array).join(","));