let string = ""
let input = document.getElementById("input")
let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener("click" , (e)=>{
        // console.log(e.target.innerHTML)
        string = string + e.target.innerHTML
        input.innerHTML = "lsjdf"
        console.log(input.innerHTML)
        
    })
})
