let btns = document.querySelectorAll(".btn")
for(btn of btns){
    let display = document.querySelector(".display")
    btn.addEventListener("click", (e)=>{
    let btnInnerHtml = e.target.innerHTML
    if(btnInnerHtml == "C"){
        display.value = ""
    }
    else if


    else{
        display.value = display.value + btnInnerHtml 
    }
    })
}