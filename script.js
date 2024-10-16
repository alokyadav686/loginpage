let cimg = document.querySelectorAll(".andar")
let next = document.querySelector(".btnright")
let previous = document.querySelector(".btnleft")

let allstars1 =document.querySelectorAll(".stars1 i")
let allstars2 =document.querySelectorAll(".stars2 i")
let allstars3 =document.querySelectorAll(".stars3 i")
let allstars4 =document.querySelectorAll(".stars4 i")


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

    // console.log(faStar)
    // console.log(allstars[i])
    // console.log(i)

    faStar.addEventListener("click", ()=>{
        console.log(i)
        const n=i
        for (i=0;i<=n;i++){
            if(i<=n){

                allstars1[i].style.color="yellow"
            }

        }

    })

})

allstars2.forEach((faStar, i) =>{

    // console.log(faStar)
    // console.log(allstars[i])
    // console.log(i)

    faStar.addEventListener("click", ()=>{
        console.log(i)
        const n=i
        for (i=0;i<=n;i++){
            if(i<=n){

                allstars2[i].style.color="yellow"
            }

        }

    })

})

allstars3.forEach((faStar, i) =>{

    // console.log(faStar)
    // console.log(allstars[i])
    // console.log(i)

    faStar.addEventListener("click", ()=>{
        console.log(i)
        const n=i
        for (i=0;i<=n;i++){
            if(i<=n){

                allstars3[i].style.color="yellow"
            }

        }

    })

})

allstars4.forEach((faStar, i) =>{

    // console.log(faStar)
    // console.log(allstars[i])
    // console.log(i)

    faStar.addEventListener("click", ()=>{
        console.log(i)
        const n=i
        for (i=0;i<=n;i++){
            if(i<=n){

                allstars4[i].style.color="yellow"
            }

        }

    })

})