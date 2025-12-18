    /* ===============================
       APPEND (add at end)
    =============================== */

    let box = document.getElementById("box");
    box.append(" Appended text");

    /* ===============================
       REMOVE (delete element)
    =============================== */

    let secondPara = document.getElementById("para2");
    secondPara.remove();

    /* ===============================
       REPLACE (swap element)
    =============================== */

    let oldHeading = document.getElementById("heading");

    let newHeading = document.createElement("h2");
    newHeading.textContent = "New Heading";

    oldHeading.replaceWith(newHeading);