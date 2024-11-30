let inputBox = document.getElementById("inputBox");
let totalWords = document.getElementById("words");
let totalChars = document.getElementById("chars");
let totalAlphabets = document.getElementById("alphabets");
let totalNumbers = document.getElementById("numbers");

function getWordCount(str) {
  let splited = str.trim().split(/\s+/);
  if ((splited = "")) {
    return 0;
  } else {
    return str.length;
  }
}

function counter(str) {
  let charsCount = 0;
  let alphabetsCount = 0;
  let numbersCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "\n") {
      charsCount++;
    }
    if ((str[i] > "a" && str[i] < "z") || (str[i] > "A" && str[i] < "Z")) {
      alphabetsCount++;
    }
    if (str[i] >= "0" && str[i] <= "9") {
      numbersCount++;
    }
  }
  totalChars.value = charsCount;
  totalAlphabets.value = alphabetsCount;
  totalNumbers.value = numbersCount;
}

function wordCounter() {
  let words = getWordCount(inputBox.value);
  totalWords.value = words;
  counter(inputBox.value);
}
