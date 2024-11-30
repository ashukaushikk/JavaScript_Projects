let text = document.getElementById("inputBox");
let formatOptions = document.getElementsByName("format-option");

formatOptions.forEach(function (e, index) {
  e.addEventListener("click", () => {
    formateText(index);
  });
});

function formateText(index) {
  if ((text.value == "")) {
    formatOptions[index].checked = false;
  } else {
    switch (index) {
      case 0:
        text.value = text.value.toUpperCase();
        break;
      case 1:
        text.value = text.value.toLowerCase();
        break;
      case 2:
        text.value = capitalizeSentence(text.value);
        break;
      case 3:
        text.value = capitalizeWord(text.value);
        break;
      case 4:
        text.value = removeNumber(text.value);
        break;
      case 5:
        text.value = removePunctuation(text.value);
        break;
    }
  }
}

function capitalizeSentence(str) {
  let newString = removeExtraSpaces(str);
  let splitSentence = newString.split(". ");
  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1);
  }
  splitSentence = splitSentence.join(". ");
  return splitSentence;
}

function capitalizeWord(str) {
  let newString = removeExtraSpaces(str);
  let splitWord = newString.split(" ");
  for (let i = 0; i < splitWord.length; i++) {
    splitWord[i] = splitWord[i][0].toUpperCase() + splitWord[i].slice(1);
  }
  splitWord = splitWord.join(" ");
  return splitWord;
}

function removeExtraSpaces(str) {
  return str.replace(/\s+/g, " ").trim();
}

function removeNumber(str) {
  return str.replace(/[0-9]/g, "");
}

function removePunctuation(str) {
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  return str.replace(regex, "");
}
