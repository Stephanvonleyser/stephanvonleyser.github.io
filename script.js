
const animatedText = document.querySelector('.animated-text');
const text = "Hello, I'm Stephan von Leyser!\nWelcome to my portfolio\nChekout my projects and contact information!\nHave a nice day!";
let index = 0;

function typeText() {
    if (index < text.length) {
        const currentChar = text.charAt(index);
        animatedText.innerHTML += currentChar === '\n' ? '<br>' : currentChar;
        index++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (index > 0) {
        animatedText.innerHTML = animatedText.innerHTML.slice(0, -1);
        index--;
        setTimeout(deleteText, 50);
    } else {
        setTimeout(typeText, 1000);
    }
}

typeText();