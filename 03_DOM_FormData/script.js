
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
    e.preventDefault();  //preventDefault() is used to stop the browser’s default behavior like page reload,
//  form submission, and link redirection so that JavaScript can control the process.

    let data=new FormData(form);
    //console.log(data)

    //📤 GET VALUES FROM FormData

    let name=data.get("username")
    let email=data.get("email")

    console.log(name,email)

    //➕ ADD NEW VALUES MANUALLY
    data.append("age", 22);

    for(let pair of data.entries()){
         console.log(pair[0], pair[1]);
    }

}
)
})