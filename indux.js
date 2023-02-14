const plains = document.querySelectorAll(".plain")
plains.forEach((plain)=> {
 plain.addEventListener("click", () => {
   removeactiveclasses()
   plain.classList.add("active")
 })
}) 
function removeactiveclasses (){
    plains.forEach((plain) =>{
     plain.classList.remove("active")
    })
}