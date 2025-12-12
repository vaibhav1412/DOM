 // 1) Select element by ID
    let selById = document.getElementById("title");
    console.log("By ID:", selById);

    // 2) Select elements by Class
    let selByClass = document.getElementsByClassName("item");
    console.log("By Class:", selByClass);

   // 3) Select elements by Tag Name
    let selByTag = document.getElementsByTagName("div");
    console.log("By Tag:", selByTag);
    
    // 4) Select FIRST match using querySelector
    let selQ = document.querySelector(".item");
    console.log("querySelector:", selQ);

    // 5) Select ALL matches using querySelectorAll
    let selQAll = document.querySelectorAll(".item");
    console.log("querySelectorAll:", selQAll);

    