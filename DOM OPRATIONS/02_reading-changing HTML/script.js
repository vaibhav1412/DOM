
    /*
      --- WHAT IS DOM READING? ---
      After selecting an element, we can READ its:
      1) text content          (textContent)
      2) visible text          (innerText)
      3) inner HTML            (innerHTML)
      4) attribute values      (getAttribute)
      5) input field values    (value)

      Here we practice all of these.
    */

/* syntax:

1]Get text:

element.textContent;
element.innerText;

2]Set Text

element.textContent = "Hello";

3]Get HTML:
element.innerHTML;

4]Set HTML:
element.innerHTML = "<b>Welcome</b>";

*/

    // SELECT ELEMENTS
    let title = document.getElementById("title");         // <h2>
    let desc  = document.querySelector(".desc");          // <p>
    let photo = document.getElementById("photo");         // <img>
    let userInput = document.getElementById("username");  // <input>


    // 1️⃣ Read textContent (all text inside the element)
    document.getElementById("out1").innerText =
      "textContent: " + title.textContent;
    // Output: "Welcome User"


    // 2️⃣ Read innerText (visible text only)
    document.getElementById("out2").innerText =
      "innerText: " + title.innerText;


    // 3️⃣ Read innerHTML (HTML inside the element)
    document.getElementById("out3").innerText =
      "innerHTML: " + title.innerHTML;
    // Output: "<span>User</span>" inside the <h2>


    // 4️⃣ Read attribute values (src, id, class, etc.)
    let imgSrc = photo.getAttribute("src");
    document.getElementById("out4").innerText =
      "Image src attribute: " + imgSrc;


    // 5️⃣ Read input value
    let inputValue = userInput.value;
    document.getElementById("out5").innerText =
      "Input value: " + inputValue;
 