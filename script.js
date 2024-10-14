let cimg = document.querySelectorAll(".andar")
let next = document.querySelector(".btnright")
let previous = document.querySelector(".btnleft")


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