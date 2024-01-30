const NUMBER_OF_CARS_TO_PRODUCE = 10;
const TIME_PAINT_PROCESS = 4;
const TIME_TIRE_PROCESS = 1;
const TIME_INTERIOR_PROCESS = 4;


const productionLineWithoutSingleResponsability = async () => {
  console.log("Starting production line");
  for (let i = 0; i < NUMBER_OF_CARS_TO_PRODUCE; i++) {
    console.log(`Starting production of car ${i+1}`);
    console.log(`Starting paint process of car ${i+1}`);
    await sleep(TIME_PAINT_PROCESS * 1000);
    console.log(`Ending paint process of car ${i+1}`);
    console.log(`Starting tire process of car ${i+1}`);
    for (let j = 0; j < 4; j++) {
      await sleep(TIME_TIRE_PROCESS * 1000);
      console.log(`Tire ${j+1} of car ${i+1} finished`);
    }
    console.log(`Ending tire process of car ${i+1}`);
    console.log(`Starting interior process of car ${i+1}`);
    await sleep(TIME_INTERIOR_PROCESS * 1000);
    console.log(`Ending interior process of car ${i+1}`);
    console.log(`Ending production of car ${i+1}`);
  }
}

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

(async () => {
  await productionLineWithoutSingleResponsability();
}
)();


// Now we will apply the Single Responsability Principle

const productionLineWithSingleResponsability = async () => {
  console.log("Starting production line");
  for (let i = 0; i < NUMBER_OF_CARS_TO_PRODUCE; i++) {
    console.log(`Starting production of car ${i+1}`);
    await paintProcess(i);
    await tireProcess(i);
    await interiorProcess(i);
    console.log(`Ending production of car ${i+1}`);
  }
}

const paintProcess = async (carNumber: number) => {
  console.log(`Starting paint process of car ${carNumber+1}`);
  await sleep(TIME_PAINT_PROCESS * 1000);
  console.log(`Ending paint process of car ${carNumber+1}`);
}

const tireProcess = async (carNumber: number) => {
  console.log(`Starting tire process of car ${carNumber+1}`);
  for (let j = 0; j < 4; j++) {
    await sleep(TIME_TIRE_PROCESS * 1000);
    console.log(`Tire ${j+1} of car ${carNumber+1} finished`);
  }
  console.log(`Ending tire process of car ${carNumber+1}`);
}

const interiorProcess = async (carNumber: number) => {
  console.log(`Starting interior process of car ${carNumber+1}`);
  await sleep(TIME_INTERIOR_PROCESS * 1000);
  console.log(`Ending interior process of car ${carNumber+1}`);
}

(async () => {
  await productionLineWithSingleResponsability();
}
)();