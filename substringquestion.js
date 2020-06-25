function shortestSub(text, arrayOfWords) {
    let first, last, count = 0;
    let value = "";
    let words = text.split(" ");
    let min = text.length;
    let arr1 = new Array(arrayOfWords.length); // Store array with -1s which will be replaced as words in arrayOfWords are found
    arr1.fill(-1);
    
    // Text is shorther then list of words
    if (text.length < arrayOfWords.join('').length) {

      return -1

    }

    for (let i = 0; i < words.length; i++) {
  
      if (arrayOfWords.includes(words[i].replace(/\W+/g, ""))) {
  
        
        let index = arrayOfWords.indexOf(words[i].replace(/\W+/g, "")); // Get the index of the word
  
        
        if(arr1[index] === -1) // If word can not be found then add to count
        {
            count++
        }

        arr1[index] = i; // Put the index of the found word in the array
  
        if (count === arrayOfWords.length) {

          let min = Math.min(...arr1);
          let lengthOfSubstring = i - min;
  
          
          if (lengthOfSubstring < min) // If the length is less than the smallest value length, assign it as the new first
          {
            first = min;
            last = i;
          }
  
        }
  
      }
  
    }
    // Text did not contain all words in the arrayOfWords.
    if (count < arrayOfWords.length) {
      return -1;
    }

    if (arr1.includes(-1)){
        console.log("boo")
        return null;
    }
    else {
        value = words.slice(first, last + 1).join(' ');
    }
    console.log(value)
    return value;
  }

  let text = "The world is here. this is a life full of ups and downs. life is world"
  let words = ["life", "ups", "is", "world"]
  shortestSub(text,words);
  exports.shortestSub = shortestSub;