const text1 = "Hello, my name is Maria Sol Gosende";
const text2 = "This is step one of me becoming a Software Engineer";

const typingSpeed = 70;
const delayBetweenLines = 800;

let index1 = 0;
let index2 = 0;

const text1Element = document.getElementById('text1');
const text2Element = document.getElementById('text2');
const cursor1 = document.getElementById('cursor1');
const cursor2 = document.getElementById('cursor2');

cursor2.style.display = 'none'; 

function typeLine1() {
  if (index1 < text1.length) {
    text1Element.textContent += text1.charAt(index1);
    index1++;
    setTimeout(typeLine1, typingSpeed);
  } else {
    cursor1.style.display = 'none';
    cursor2.style.display = 'inline-block';
    setTimeout(typeLine2, delayBetweenLines);
  }
}

function typeLine2() {
  if (index2 < text2.length) {
    text2Element.textContent += text2.charAt(index2);
    index2++;
    setTimeout(typeLine2, typingSpeed);
  }
}

typeLine1();
