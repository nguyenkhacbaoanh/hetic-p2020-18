// Gold line animation - anim.js (http://animejs.com/documentation/)
var morphing = anime({
  targets: '.morphing__svg .polymorph',
  points: [
    { value: '90 60 160 95 220 190 60 190' },
    { value: '90 60 160 95 220 190 40 210' },
    { value: '90 60 200 55 220 190 40 210' },
    { value: '90 60 200 55 240 210 40 210' },
    { value: '70 40 160 95 220 190 60 190' }
  ],
  easing: 'easeOutQuad',
  duration: 3000,
  delay: 100,
  loop: true
});

// Set or unset class function
function setClassList(addClass, elementName, elementClassName) {
  if (addClass) {
    if (!elementName.classList.contains(elementClassName))
      elementName.classList.add(elementClassName);
  } else {
    if (elementName.classList.contains(elementClassName))
      elementName.classList.remove(elementClassName);
  }
}

// All infos
const morphingInfos = document.querySelectorAll('.infos__info');

// infos__info on click function
morphingInfos.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (element.classList.contains('info--active'))
      setClassList(false, morphingInfos[0], 'info--active');
    
    else {
      setClassList(false, morphingInfos[0], 'info--active');
      setClassList(false, morphingInfos[1], 'info--active');
      setClassList(false, morphingInfos[2], 'info--active');
      setClassList(false, morphingInfos[3], 'info--active');
      
      setClassList(true, element, 'info--active');
    }
  });
});