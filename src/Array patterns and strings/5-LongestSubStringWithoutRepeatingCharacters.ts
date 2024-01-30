const longestSubStringWithoutRepeatingCharacters = (words: string):number => {
  let firstPointer = 0;
  let slidePointer = 1;
  let longestSubstring = 0;
  let arrLongestSubstring = [words[firstPointer]]
  

  while (slidePointer < words.length){
    if (arrLongestSubstring.includes(words[slidePointer])){
      const index = arrLongestSubstring.indexOf(words[slidePointer]); 
      if (arrLongestSubstring.length > longestSubstring){
        longestSubstring = arrLongestSubstring.length
      }
      arrLongestSubstring = arrLongestSubstring.slice(index+1)
      arrLongestSubstring.push(words[slidePointer])
      
    }else{
      arrLongestSubstring.push(words[slidePointer])
    }
    slidePointer++;
  }
  if (arrLongestSubstring.length > longestSubstring){
    longestSubstring = arrLongestSubstring.length
  }
  return longestSubstring;
}

console.log(longestSubStringWithoutRepeatingCharacters(`${"ab".repeat(10000)}${"cd".repeat(10000)}`));
