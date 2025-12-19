/* 

1] What is a DOM Event?
-> A DOM event is an action done by the user or browser.

2] basic Syntax

element.addEventListener("eventName", function () {
  // code to run
});

3]

Event->	Used for

click->	button click
input->	typing
change-> dropdown change
submit-> form submit
mouseover->	mouse hover
keydown->	key press

*** Event = user action → JavaScript reaction
*/

/*------- click Event ------------ */

let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click",function(){
    text.textContent="Button Clicked !!";
})

/* -------- INPUT EVENT -----------*/

let input = document.getElementById("inputBox");

input.addEventListener('input',function(){
    text.textContent = input.value;
});