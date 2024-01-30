const validateIsMinor = (firstWord: string, secondWord: string, dictionaryMap: Map<string,number>) : boolean => {
  
  const minLength = Math.min(firstWord.length,secondWord.length);

  for (let i = 0; i < minLength; i++) {
    const firstPos = dictionaryMap.get(firstWord[i])||-1;
    const secondPos = dictionaryMap.get(secondWord[i])||-1;

    if (secondPos > firstPos) return true;
    if (firstPos > secondPos) return false;
  
  }

  return firstWord.length <= secondWord.length
}

const verifyingAllienDictionary = (words: string[], dictionary: string): boolean => {
  
  let dictionaryMap = new Map<string,number>();
  for (let i = 0; i < dictionary.length; i++){
    dictionaryMap.set(dictionary[i],i);
  }
  
  for (let i = 0; i < words.length-1; i++){
    const isMinor = validateIsMinor(words[i], words[i+1],dictionaryMap);
    if (!isMinor) return false;
  }
  return true;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(verifyingAllienDictionary(words1, order1));

const words2 = ["habito", "hacer", "sonreir", "lectura"];
const order2 = "hlabcdfgijkmnopqrstuvwxyz";

console.log(verifyingAllienDictionary(words2, order2));

const words3 = ["conocer", "cono"];
const order3 = "abcdefghijkmnopqrstuvwxyz";

console.log(verifyingAllienDictionary(words3, order3));