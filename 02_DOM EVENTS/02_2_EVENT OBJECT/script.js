/*
Q. What is the event object?

 ->When an event happens (click, input, key press),
JavaScript automatically gives extra information about that event.

That information is stored in a variable usually named event (or e).

*/

/*

1️⃣ event
function (event) { }
-> event is automatically passed by browser
-> It contains details about the action

2️⃣ event.target
event.target
->The element that triggered the event
->Example:
  Button click → button element
  Input typing → input element

3️⃣ event.target.value
event.target.value
->Used with inputs
->Gives typed text


🧠 Easy Memory Trick
->event → what happened
->event.target → who did it

*/

let btn = document.getElementById("btn");
let msg = document.getElementById("msg");
let box = document.getElementById("box");


btn.addEventListener("click",(event)=>
{
    msg.textContent = "clicked event name :"+ event.target.tagName;
});

box.addEventListener("input",function(e){

msg.textContent = "Typed value: " + event.target.value;
});