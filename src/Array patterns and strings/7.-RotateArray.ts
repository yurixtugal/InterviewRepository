function binarySearchRotate(arr: number[], target: number): number {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
      let middle = Math.floor((leftPointer + rightPointer) / 2);

      if (arr[middle] === target) {
          return middle;
      }

      if (arr[middle] >= arr[leftPointer]){
        if (target >= arr[leftPointer] && target < arr[middle]){
          rightPointer = middle-1;
        } else{
          leftPointer = middle+1;
        }
      }else{
        if (target <= arr[rightPointer] && target > arr[middle]){
          leftPointer = middle+1;
        } else{
          rightPointer = middle-1;
        }
      }

  }

  return -1; // Element not found
}


const rotateArray = [4,5,6,7,8,9,10,0,1,2,3]

for (let num of rotateArray){
  console.log(binarySearchRotate(rotateArray,num))
}

console.log(binarySearchRotate(rotateArray,22))
