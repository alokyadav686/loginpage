let passwords = document.querySelectorAll(".passcon input")
let opens = document.querySelectorAll("#close")
let closeds = document.querySelectorAll("#open")




passwords.forEach((password,id) =>{


    let open =opens[id]
    let closed =closeds[id]

    
    closed.style.display = "none"
    
    
    open.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text"
            open.style.display = "none"
            closed.style.display = "inline"
            
        }
        
    }) 
    
    closed.addEventListener("click", () => {
        if (password.type === "text") {
            password.type = "password"
            closed.style.display = "none"
            open.style.display = "inline"
 
        }
        
    })
    
})