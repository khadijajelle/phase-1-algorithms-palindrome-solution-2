function isPalindrome(word) {
  // Helper function to remove non-alphanumeric characters
  function removeNonAlphanumeric(str) {
    return str.replace(/[^A-Za-z0-9]/g, '');
  }

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanWord = removeNonAlphanumeric(word).toLowerCase();
  
  // Initialize pointers for comparison
  let leftPointer = 0;
  let rightPointer = cleanWord.length - 1;
  
  // Loop while leftPointer is less than rightPointer
  while (leftPointer < rightPointer) {
    // If characters at leftPointer and rightPointer are not equal, return false
    if (cleanWord[leftPointer] !== cleanWord[rightPointer]) {
      return false;
    }
    
    // Move pointers inward
    leftPointer++;
    rightPointer--;
  }
  
  // If all characters matched, return true
  return true;
}

// Example usage and tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // false
}

module.exports = isPalindrome;
