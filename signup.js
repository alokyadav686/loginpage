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

let pshow = document.querySelector(".pmatch")

let passstrength = document.querySelector(".passstrength")

let passtap= document.querySelector(".passcon input")

let emailError = document.querySelector(".ematch")


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
    
    if(b.value!== c.value){
        // alert("Password dont match!!")
        pshow.classList.remove("hide")
        b.style.border ="2px solid red"
        c.style.border ="2px solid red"
        return false
    }
    else{
        b.style.border =""
        c.style.border =""
        pshow.classList.add("hide")
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


const emailVal = (a) => {

    if (a.value.indexOf('@') <= 0 || a.value.indexOf('.') <= a.value.indexOf('@') + 1 ||a.value.indexOf(".")>=a.value.length-1) {
        emailError.classList.remove("hide")
        return false
    }
    else{
        emailError.classList.add("hide")
        return true
    }
};


register.addEventListener("click", ()=>{

    data()
    equalpass()
    checkbtn()
    emailVal(a)

})

register.addEventListener("click", () => {
    if(data() && equalpass() && checkbtn()) {
        console.log("everything is good");
        
    }
});

passtap.addEventListener("mousemove", ()=>{

    const lengthofpass = b.value.length;

    if(lengthofpass <=2  ){
    passstrength.classList.remove("hide")
    passstrength.style.color ="green"
    passstrength.innerText ="Password Strength : weak"
}
else if(lengthofpass<=6){
    passstrength.classList.remove("hide")
    passstrength.style.color ="yellow"
    passstrength.innerText ="Password Strength : medium"
    
}
else{
    passstrength.classList.remove("hide")
    passstrength.style.color ="red"
    passstrength.innerText ="Password Strength : hard   "
    

    }

})

passtap.addEventListener("mouseleave", ()=>{

    passstrength.classList.add("hide")
})



