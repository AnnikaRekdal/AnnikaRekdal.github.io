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

// lag ditt eget mooadboard

//importere bilder og knapp fra DOM
let lagBtn = document.getElementById('lagMoodboard')
lagBtn.addEventListener('click', displayBilder)

let bildeEl = document.getElementsByTagName('img') //liste med bildene

//liste med bilder brukeren velger
let bilderValgt = []

// legge til lytter og css for å markere bilder og legge til i liste med valgte bilder
document.onclick = function velgBilde(event){
    for(let i=0; i < bildeEl.length; i++){
        if(bildeEl[i].contains(event.target)){
            bildeEl[i].classList.toggle("markert")
            if(bildeEl[i].classList.contains("markert")){
                bilderValgt.push(bildeEl[i])
            }
            else{
                bilderValgt.pop(bildeEl[i])
            }
        }
    }
}

function displayBilder(){
    for(let i = bildeEl.length - 1; i>=0; i--){
        if(bildeEl[i].classList.contains("markert")){
         bildeEl[i].classList.toggle("visBilder")
        }
      else{
         document.images[i].remove(document.images[i])
        }
    }
}

function lagNy(){
    location.reload()
}


