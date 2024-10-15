let passwords = document.querySelectorAll(".passcon input")
let opens = document.querySelectorAll("#close")
let closeds = document.querySelectorAll("#open")


let a =document.querySelector("#a")
let b =document.querySelector("#b")
let c =document.querySelector("#c")
let d =document.querySelector("#d")
let e =document.querySelector("#e")

let checkbox = document.querySelector("#cbox")

let register =document.querySelector(".registerbtn")




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


const data=()=>{

if(a.value=="" || b.value=="" || c.value=="" || d.value==""|| e.value=="" ){
    alert("all fields are mandatory")
    return false;
}
else{
    return true
}
}


const equalpass =()=>{
    
    if(b.value!= c.value){
        alert("Password dont match!!")
        b.style.border ="2px solid red"
        c.style.border ="2px solid red"
        
    }
    else{
        b.style.border =""
        c.style.border =""
        return true
    }
    
}
const checkbtn =()=>{
    if(checkbox.checked){
        return true
    }
    else{
        alert("checkbox is mandatory")
        return false
        
    }
}
register.addEventListener("click", ()=>{

    data()
    equalpass()
    checkbtn()

        // if(data() && equalpass()&&checkbox()){
        //     console.log("everything is good")
        // }
})