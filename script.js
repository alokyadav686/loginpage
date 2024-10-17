let cimg = document.querySelectorAll(".andar")
let next = document.querySelector(".btnright")
let previous = document.querySelector(".btnleft")

let allstars1 =document.querySelectorAll(".stars1 i")
let allstars2 =document.querySelectorAll(".stars2 i")
let allstars3 =document.querySelectorAll(".stars3 i")
let allstars4 =document.querySelectorAll(".stars4 i")

let review1 =document.querySelector(".review1")
let review2 =document.querySelector(".review2")
let review3 =document.querySelector(".review3")
let review4 =document.querySelector(".review4")

let menubtn =document.querySelector(".navbar i")
let hidden = document.querySelector(".hiddennav")

let counter=0

cimg.forEach((andar,indexx) =>{

    andar.style.left = `${indexx * 100}%`


})


const slideimg = ()=>{
    cimg.forEach((andar) => {
        andar.style.transform =`translateX(-${counter * 100}%)`
        }
    )
}   


next.addEventListener("click", ()=>{

    counter++
    slideimg();
    
    if(counter>=5){
        counter=-1
    }
    
   
})
previous.addEventListener("click", ()=>{
    
    counter--
    slideimg();

    if(counter<=0){
        counter=6
    }
    
})


setInterval(() => {
    next.click();

}, 4000);

allstars1.forEach((faStar, i) =>{


    faStar.addEventListener("click", ()=>{
        console.log(i)
        review1.classList.remove("hide")
        const n=allstars1.length
        for (j=0;j<n;j++){
            if(j<=i){

                allstars1[j].style.color="yellow"
            }
            else{
                allstars1[j].style.color="white"
            }

        }


    })

})

allstars2.forEach((faStar, i) =>{


    faStar.addEventListener("click", ()=>{
        console.log(i)
        review2.classList.remove("hide")
        const n=allstars2.length
        for (j=0;j<n;j++){
            if(j<=i){

                allstars2[j].style.color="yellow"
            }
            else{
                allstars2[j].style.color="white"
            }

        }


    })

})



allstars3.forEach((faStar, i) =>{


    faStar.addEventListener("click", ()=>{
        console.log(i)
        review3.classList.remove("hide")
        const n=allstars3.length
        for (j=0;j<n;j++){
            if(j<=i){

                allstars3[j].style.color="yellow"
            }
            else{
                allstars3[j].style.color="white"
            }

        }


    })

})


allstars4.forEach((faStar, i) =>{


    faStar.addEventListener("click", ()=>{
        console.log(i)
        review4.classList.remove("hide")
        const n=allstars4.length
        for (j=0;j<n;j++){
            if(j<=i){

                allstars4[j].style.color="yellow"
            }
            else{
                allstars4[j].style.color="white"
            }

        }


    })

})


menubtn.addEventListener("click",() =>{

    hidden.classList.remove("hide")

})