const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the content of the new.js file.';
container.appendChild(content);

const redContent = document.createElement('div');
redContent.classList.add('content');
redContent.style.cssText = "color: red; background: white;";
redContent.textContent = 'RED TEST';
container.appendChild(redContent);

const blueContent = document.createElement('div');
blueContent.classList.add('content');
blueContent.style.cssText = "color: blue; background: white;";
blueContent.innerHTML = '<h3>BLUE H4</h3>';
container.appendChild(blueContent);

const newContent = document.createElement('div');
newContent.classList.add('content');   
newContent.style.cssText = "color: green; padding: 10px; margin-bottom: 50px; background: #ffe4e1; border: 2px solid black;";
newContent.innerHTML = '<h1>GREEN H4</h1>Test 2';
container.appendChild(newContent);

const btnContent = document.createElement('div');
btnContent.classList.add('content');
btnContent.style.cssText = "color: purple; background: white; padding: 10px;";
container.appendChild(btnContent);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World") 
// btn.onclick = () => console.log("Button clicked!");

function alertFunction () {
    alert("Hello World");
    console.log("Button clicked!");
    btnContent.textContent = "Button was clicked!";
}

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
    console.log(`Button with id ${button.id} was clicked!`);
    btnContent.textContent = `Button with id ${button.id} was clicked!`;
  });
});

const textbox = document.querySelector("#textbox1");
const keyCountSpan = document.querySelector("#keycountspan");
const MAX_LENGTH = parseInt(textbox.getAttribute("maxlength"));

textbox.addEventListener("input", () => {
    const characterCount = textbox.value.length;
    keyCountSpan.textContent = `${characterCount}/${MAX_LENGTH} max`;
    console.log(`${characterCount} characters in textbox`);
});

textbox.addEventListener("keydown", (e) => {
    if (textbox.value.length >= 20 && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
    }
});