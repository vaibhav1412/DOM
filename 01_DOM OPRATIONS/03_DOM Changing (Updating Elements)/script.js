    // 1️⃣ CHANGE TEXT
    let t = document.getElementById("title");
    t.textContent = "New Heading";

    // 2️⃣ CHANGE HTML
    let p = document.getElementById("para");
    p.innerHTML = "New <b>HTML</b> content";

    // 3️⃣ CHANGE ATTRIBUTE (image source)
    let img = document.getElementById("photo");
    img.setAttribute("src", "https://via.placeholder.com/150");

    // 4️⃣ CHANGE STYLE (inline style)
    t.style.color = "blue";
    t.style.fontSize = "28px";
    p.style.backgroundColor = "yellow";