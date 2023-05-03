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
firstImg = karusellEl.querySelectorAll('.element')[0]
const pilerEls = document.querySelectorAll('.wrapper .pil')

let firstImgWidth = firstImg.clientWidth + 14
pilerEls.forEach(icon => {
    icon.addEventListener('click', () =>{
        // om man klikker på ikonet vil bredden reduseres og legges til neste img
        if(icon.id == "venstre"){
          karusellEl.scrollLeft -= firstImgWidth
          console.log("venstre")
        }
        else{
          karusellEl.scrollLeft += firstImgWidth
          console.log("høyre")
        }
    });
});

// local storage likerklikk

const likerEl = document.querySelectorAll('.fa-heart');

likerEl.forEach((icon, index) => {
  // Oppdater ikonens klasse basert på lagret status
  const isLiked = localStorage.getItem(`liked_${index}`);
  if (isLiked === 'true') {
    icon.classList.add('valgt');
  }

  icon.addEventListener('click', () => {
    if (icon.classList.contains('valgt')) {
      icon.classList.remove('valgt');
      localStorage.setItem(`liked_${index}`, false);
    } else {
      icon.classList.add('valgt');
      localStorage.setItem(`liked_${index}`, true);
    }
  });
});