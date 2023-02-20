                // barra navegacion
const li = document.querySelectorAll('.list');
const section = document.querySelectorAll("section"); 

function activeMenu (){
  let len= section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}

activeMenu();
window.addEventListener("scroll", activeMenu);
              
              // scroll arriba

      let mybutton = document.getElementById("TopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




             // habilidades

const skillsSection = document.getElementById('habilidades');
const barraProgreso = document.querySelectorAll('.porcentaje');

function showProgress(){
  barraProgreso.forEach(barraProgreso=>{
    const value = barraProgreso.dataset.progress;
    barraProgreso.style.opacity = 1;
    barraProgreso.style.width = `${value}%`;
  });
}

function circle(el){
  $(el).circleProgress({fill: {color: '#2DB777'}})
  .on('circle-animation-progress', function(event, progress, stepValue){
    $(this).find('.value-container').text(parseInt(stepValue * 100) + '%');
  });
};


function onSkills() {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos < screenPos){
    showProgress();
    circle('.circulo');
    window.removeEventListener('scroll', onSkills);
  }
};
window.addEventListener('scroll', onSkills);