const calculateArea = (data: number[], firstPointer: number, secondPointer: number): number => {
  if (secondPointer-firstPointer===1)  return 0;
  const firstHeight = data[firstPointer];
  const secondHeight = data[secondPointer];
  
  const fullArea = Math.min(firstHeight,secondHeight)*(secondPointer-firstPointer-1);
  let discountArea = 0;
  for ( let i = firstPointer+1;i <secondPointer;i++){
    discountArea += data[i]
  }
  return fullArea-discountArea;
}

const trappingRainWater = (data : number[]):number => {

  let firstPointer = 0;
  let secondPointer = 1;
  let totalArea = 0;

  while (secondPointer< data.length){
    const currentFirstHeight = data[firstPointer];
    const currentSecondHeight = data[secondPointer];

    if (currentSecondHeight >= currentFirstHeight){
      const currentArea = calculateArea(data,firstPointer,secondPointer)
      totalArea += currentArea;
      firstPointer = secondPointer;
      secondPointer =firstPointer+1
    }else{
      secondPointer++;
    }

    if (secondPointer === data.length){
      const newData = data.slice(firstPointer+1);
      totalArea += trappingRainWater(newData);
    }

  }

  return totalArea;

}


const trappingRainWaterTwo = (data : number[]):number =>{
  let leftPointer = 0;
  let rightPointer = data.length-1;
  let maxLeft = data[leftPointer];
  let maxRight = data[rightPointer];
  let totalArea = 0;
  while (leftPointer < rightPointer){
    if (data[leftPointer] < data[rightPointer]){
      leftPointer++;
      totalArea += Math.max(0,maxLeft-data[leftPointer]);
      maxLeft = Math.max(maxLeft,data[leftPointer])
    } else {
      rightPointer--;
      totalArea += Math.max(0,maxRight-data[rightPointer]);
      maxRight = Math.max(maxRight,data[rightPointer])
    }
  }
  return totalArea;
}


const data = [0,1,0,2,1,0,1,3,2,1,2,1,1,1,1,1,1,1,2,45,30,100]
console.log(trappingRainWaterTwo(data));