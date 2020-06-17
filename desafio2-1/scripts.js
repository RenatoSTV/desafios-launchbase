const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const maximizeModal = document.querySelector(".modal")
//const maxButton = document.querySelector("maximize-molda")

for(let card of cards){
    card.addEventListener("click", function(){
        const course = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${course}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

if(!(maximizeModal.classList.contains("maximize"))){
    document.querySelector(".maximize-modal").addEventListener("click", function(){
        maximizeModal.classList.add("maximize")
    })

    document.querySelector(".minimize-modal").addEventListener("click", function(){
        maximizeModal.classList.remove("maximize")
    })

}

// if((maximizeModal.classList.contains("maximize"))){
// }

    
// if(!(maximizeModal.classList.contains("maximize"))){
//     document.querySelector(".maximize-modal").addEventListener("click", function(){
//         maximizeModal.classList.add("maximize")
//     })
// }
