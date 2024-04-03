let paragraph = prompt("enter paragraph");
let command = prompt(`enter command:(below given list items reflects the command and what does that command actually do,kindly enter the command according to your requirement)
> char-count: Count the number of characters in the paragraph.
> alpha-count: Count the number of alphabetic characters in the paragraph.
> digit-count: Count the number of digit characters in the paragraph.
> vowel-count: Count the number of vowel characters in the paragraph.
> consonant-count: Count the number of consonant characters in the paragraph.
> special-char-count: Count the number of special characters in the paragraph.
> word-count: Count the number of words in the paragraph.
> avg-word-length: Calculate the average word length in the paragraph.`);

function characterCount(paragraph) {
  let count = 0;
  let spaces = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === " ") {
      spaces++;
    }
  }
  count = paragraph.length - spaces;
  console.log(count);
}

function alphabetCount(paragraph) {
  let count = 0;
  let alphabets=paragraph.toLowerCase();
  for (let i = 0; i < alphabets.length; i++) {
    if (alphabets[i] >= "a" && alphabets[i] <= "z") {
      count++;
    }
  }
  console.log(count);
  return;
}


function digitCount(paragraph) {
  let count = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] >= '0' && paragraph[i] <= '9' && paragraph[i] !== ' ') {
      count++;
    }
  }
  console.log(count);
}


function vowelCount(paragraph) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i <= paragraph.length; i++) {
    if (vowel.includes(paragraph[i])) {
      count++;
    }
  }
  console.log(count);
}


  function consonantCount(paragraph) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
    for (let i = 0; i < paragraph.length; i++) {
      let characters = paragraph[i].toLowerCase();
      if (characters >= 'a' && characters <= 'z' && !vowels.includes(characters) && characters !== ' ') {
        count++;
      }
    }
    console.log(count);
}


function specialsCount(paragraph) {
  let count = 0;
  let specials = ["_", "$", "%"];
  for (let i = 0; i <= paragraph.length; i++) {
    if (specials.includes(paragraph[i])) {
      count++;
    }
  }
  console.log(count);
}

function wordCount(paragraph) {
  let count = 0;
  let trimmed = paragraph.trim();
   let wordArray = trimmed.split(" ");
   if(wordArray==""){ 
    console.log(count);
    }
 else{
    count = wordArray.length;
    console.log(count);
 }

}

function averageCount(paragraph) {
  let letters = 0;
  let spaces = 0;
  let words = 0;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === " ") {
      spaces++;
    }
  }

  letters = paragraph.length - spaces;

  let trimmed = paragraph.trim();
  let wordArray = trimmed.split(" ");
  words = wordArray.length;
  
if(letters==0){
  alert("kindly enter something");
}
else{
  console.log(letters / words);
}

}

switch (command) {
  case "char-count":
    characterCount(paragraph);
    break;
  case "alpha-count":
    alphabetCount(paragraph);
    break;
  case "digit-count":
    digitCount(paragraph);
    break;
  case "vowel-count":
    vowelCount(paragraph);
    break;
  case "consonant-count":
    consonantCount(paragraph);
    break;
  case "special-char-count":
    specialsCount(paragraph);
    break;
  case "word-count":
    wordCount(paragraph);
    break;
  case "avg-word-length":
    averageCount(paragraph);
    break;
}

