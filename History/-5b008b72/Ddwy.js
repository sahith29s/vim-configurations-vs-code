let string = ""
let input = document.getElementById("input")
let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=>{
        // console.log(e.target.innerHTML)
        if (e.target.innerHTML == "=") {
            eval
            
        }
        string = string + e.target.innerHTML
        input.value = string
        document.querySelector(".display").innerHTML = string
        

    })
})