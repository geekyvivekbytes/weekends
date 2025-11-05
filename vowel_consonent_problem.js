function isVowel(words) {
  const vowels = 'aeiouAEIOU';
  for (let index = 0; index < vowels.length; index++) {
    if (vowels[index] === words) {
      return true;
    }
  }
  return false;
}

function alternateVowels(words) {
  let nIndex = 0;
  let newWords = words[nIndex];
  let remainingWords = '';
  for (let index = 1; index < words.length; index++) {
    let word = words[index];
    const nWord = newWords[nIndex]
    if (isVowel(nWord) && !isVowel(word) || !isVowel(nWord) && isVowel(word)) {
      newWords = newWords + word;
      nIndex++;
    } else {
      remainingWords = remainingWords + ',' + word;
    }
  }
  return `${newWords}${remainingWords}` ;
}

function test(description, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${description}`);
    return;
  }
  console.log(`❌ ${description}`);
  console.log(`     Expected: <${expected}>, Actual: <${actual}>`);
}

function runAllTests() {
  test('mohit case ', alternateVowels("mohit"), "mohit");
  test('notfound', alternateVowels('notfound'), 'noton,f,u,d');
  test('apple', alternateVowels('apple'), 'ape,p,l');
  
}


runAllTests(); 
