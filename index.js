const bar=document.getElementById("bar")
const navBar=document.getElementById("navbar")

if (bar){
    bar.addEventListener("click",()=>{
        // navBar.classList.add("myStyle")
        alert("you have clicked")
    })
}


// function myFunction() {
//     const list = document.getElementById("navbar").classList;
//     list.add("myStyle");
//   }




// const mainContainer=document.querySelector(".main-container")
// const thanksContainer=document.querySelector(".second-container")
// const submit=document.getElementById("main-submit")
// const rating=document.getElementById("rating")
// const rates=document.querySelectorAll(".btn")

// submit.addEventListener("click",()=>{
//     thanksContainer.classList.remove("hidden")
//     mainContainer.style.display="none"
// })

// rates.forEach((rate)=>{
//     rate.addEventListener("click",()=>{
//        rating.innerHTML=rate.innerHTML
//     })
// })