
/*
🔥 INTERVIEW LINE
FormData is a DOM API used to collect, manage and send form data including files to the backend easily.

FormData: is a built-in JavaScript object that collects all form field data and lets you send it to server easily (API, backend).

Instead of doing:
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
 
You can simply do:

    let formData = new FormData(form);

And it will auto collect everything.

*/

document.addEventListener("DOMContentLoaded",()=>{
let form=document.getElementById("myForm")

form.addEventListener("submit",(e)=>{
    e.preventDefault();  
        //preventDefault() is used to stop the browser’s default behavior like page reload,
        // form submission, and link redirection so that JavaScript can control the process.

    let data=new FormData(form); // -->syntax to fetch all data all crating FormData
    //console.log(data)

  //****Operations on FromDATA********

    //📤 GET VALUES FROM FormData

    let name=data.get("username")
    let email=data.get("email")

    console.log(name,email)

    // getAll
    let All=data.getAll("hobby")   // remeber take the values from html page input fields same name hobby abs create array 
    console.log(All)

    //➕ ADD NEW VALUES MANUALLY

    data.append("age", 22);
    data.append("password",1234);

    //update

    data.set("age",25);
    data.set("education","Engineering"); //also can add

    //delete

    data.delete("password")

    //// ******* traverasal on form *****//

    console.log("key-value pairs:")

    /*for(let pair of data.entries()){
         console.log(pair[0], pair[1]);
    }*/

    for(let [key,value] of data.entries()){
        console.log(key,value)
    }

    // ACCESING KEY PAIRS
    console.log("Key Pairs:")
    for(let key of data.keys())
    {
        console.log(key)
    }

    //ACCESING VALUE PAIR
    console.log("Value Pairs:")
    for(let value of data.values())
    {
        console.log(value)
    }

    // find element with the checked state
    console.log(document.querySelector("input[name='gender']:checked")?.value)

    document.querySelectorAll("input[name='hobby']:checked").forEach(element => {
        console.log(element.value)    
    });
}
)
})