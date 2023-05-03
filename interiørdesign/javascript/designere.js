//navbar
const menyToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const menyToggle2 = document.querySelector('.meny .toggle')

menyToggle.addEventListener('click', aktiver)
menyToggle2.addEventListener('click', lukk)



function aktiver(){
    menyToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    
}

function lukk(){
    showcase.classList.toggle('active')
    menyToggle.classList.toggle('active')
}

// bilder karusell
const karusellEl = document.querySelector('.carousel')
const karusellEls = document.querySelectorAll('img')
firstImg = karusellEl.querySelectorAll('img')[0]
const pilerEls = document.querySelectorAll('.wrapper i')

let firstImgWidth = firstImg.clientWidth + 18
pilerEls.forEach(icon => {
    icon.addEventListener('click', () =>{
        // om man klikker på ikonet vil bredden reduseres og legges til neste img
        if(icon.id == "venstre"){
          karusellEl.scrollLeft -= firstImgWidth
         
        }
        else{
          karusellEl.scrollLeft += firstImgWidth
          
        }
        for(let i =0; i < karusellEls.length; i++){
            if(karusellEls[i] == 0){
                document.getElementById("venstre").style.display = "none";
            }
            else{
                document.getElementById("venstre").style.display = "block";
            }
        }
    });
});


