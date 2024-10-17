let password = document.querySelector(".passcon input")
let open = document.querySelector("#close")
let closed = document.querySelector("#open")



closed.style.display = "none"


open.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
        open.style.display = "none"
        closed.style.display = "flex"

    }

})

closed.addEventListener("click", () => {
    if (password.type === "text") {
        password.type = "password"
        closed.style.display = "none"
        open.style.display = "flex"
 
    }

})
