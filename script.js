window.addEventListener("scroll", ()=> {
console.log("scrolling... detected");
const hiddenText = document.querySelectorAll(".hidden-text");
const hiddenWord = document.querySelectorAll(".hidden-word")

hiddenText.forEach((text, index) => {
const textPosition = text.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;
const windowHeight = window.innerHeight

console.log(`Element ${index + 1}:`, text, textPosition, windowHeight);
console.log("Text position:", textPosition, "screenPosition", screenPosition);
if (textPosition < screenPosition){
text.classList.add("visible-text");
console.log("Class added!");
console.log(`Element ${index + 1} is now visible`)
}
});
//constant line 6
hiddenWord.forEach((wordElement)=> {
const wordPosition = wordElement.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (wordPosition < windowHeight) {
wordElement.classList.add("visible");
}
});
});