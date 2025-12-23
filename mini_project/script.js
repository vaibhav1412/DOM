

let currentCount=document.querySelector("#count");

let increment = ()=>
{
    let value=parseInt(currentCount.innerText);

    value=value+1;

    currentCount.innerText=value

}

let decrement= () =>
{
    let value=parseInt(currentCount.innerText);

    value=value-1;

    currentCount.innerText=value
}

// extra for view experience
  const box = document.getElementById("box");
  const inc = document.getElementById("inc");
  const dec = document.getElementById("dec");

  function changeColor(color) {
    box.style.backgroundColor = color;

    setTimeout(() => {
      box.style.backgroundColor = "aqua";
    }, 200); 
  }

  inc.addEventListener("click", () => changeColor("red"));
  dec.addEventListener("click", () => changeColor("green"));

11