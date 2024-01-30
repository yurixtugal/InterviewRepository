const containerWithMostWater = ( arrHeight: number[]) => {
  let firstPointer = 0;
  let lastPointer = arrHeight.length-1;
  let maxArea = 0;
  while (lastPointer >= firstPointer){
    const firstHeight = arrHeight[firstPointer];
    const lastHeight = arrHeight[lastPointer];
    const currentArea = Math.min(firstHeight,lastHeight)*(lastPointer-firstPointer)
    if (currentArea >= maxArea) maxArea = currentArea;
    if (firstHeight < lastHeight){
      firstPointer++;
    }else{
      lastPointer--;
    }
  }
  return maxArea;
}

const arrHeight = [9,24,6,2,5,4,50,10,6];

console.log(containerWithMostWater(arrHeight))