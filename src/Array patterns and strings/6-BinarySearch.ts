const binarySearch = (data: number[], element: number) => {
  let leftPointer = 0;
  let rightPointer = data.length;
  let position;
  while (leftPointer < rightPointer){
    const middle = leftPointer + Math.round((rightPointer-leftPointer)/2)
    
    if (element === data[middle]) return middle;
    
    if (element < data[middle]){
      rightPointer = middle-1;
    } else {
      leftPointer = middle+1;
    }

  }

  return -1;
}

const binarySearchSecond = (data: number[], target: number) => {
  let leftPointer = 0;
  let rightPointer = data.length-1;

  while (leftPointer <= rightPointer){
    const middlePointer = Math.floor((leftPointer+rightPointer)/2);
    if (data[middlePointer] === target) return middlePointer;
    if ( target < data[middlePointer]){
      rightPointer = middlePointer-1;
    } else {
      leftPointer = middlePointer+1;
    }
  }

  return -1;

}

const arr = [1,3,4,7,8,9]

console.log(binarySearchSecond(arr,9))