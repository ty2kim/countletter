function countLetters(input){
  var charCounter = {}; // set up an empty object
  var str = input.split(" ").join("").toLowerCase(); // remove white spaces, and capitals
  for(char of str){
    if(!charCounter[char]) charCounter[char] = 1;
    else charCounter[char]++;
  }
  console.log(charCounter);
}

countLetters("lighthouse in the house");
