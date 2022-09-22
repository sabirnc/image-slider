const images = ["img-1.jpg","img-2.jpg","img-3.jpg","img-4.jpg"]
const img = document.getElementById("img")
let count = 0
const prev = document.getElementById("prev")
const next = document.getElementById("next")

img.src = images[count]

next.addEventListener("click", function(){
    count += 1
    img.src = images[count]
    if(count >= 3){
     count = 0
    
    }
   console.log("clicking")
})

prev.addEventListener("click", function(){
    count -= 1
    img.src = images[count]
    if(count <= 0){
        count = 3
    }
})
