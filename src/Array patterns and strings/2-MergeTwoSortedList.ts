const mergeTwoSortedListDesorderedSecond = (nums1 : number[], nums2 : number[],m: number,n: number) => {

  let firstPointer = m;

  for (let currentNumber of nums2){
    
    let positionInNewArray = -1
    for (let i = firstPointer; i> 0;i--){
      positionInNewArray = i;
      if (currentNumber>=nums1[i-1]) break;
    }
    if (positionInNewArray === 1 && currentNumber<nums1[0]){
      positionInNewArray = 0;
    }
    for (let i = firstPointer;i>positionInNewArray;i--){
      nums1[i] = nums1[i-1]
    }
    nums1[positionInNewArray] = currentNumber;
    firstPointer++;
  }

  return nums1;

}

const mergeTwoSortedList = (nums1 : number[], nums2 : number[],m: number,n: number) => {
  let firstPointer = m-1;
  let secondPointer = m+n-1;
  let index2 = n-1;
  while (index2 >= 0){
    const currentNumber2 = nums2[index2]
    const currentNumber1 = nums1[firstPointer]
    if (firstPointer=== -1 || currentNumber2 >= currentNumber1){
      nums1[secondPointer] = currentNumber2;
      secondPointer--;
      index2--;
    }else{
      nums1[secondPointer--] = nums1[firstPointer--]
    }
  }
  return nums1;
}

const nums1 = [-2,-1,3,0,0,0,0,0]
const m = 3
const nums2 = [-8,-7,-6,-5,-4]
const n = 5
console.log(mergeTwoSortedList(nums1,nums2,m,n).join(","));