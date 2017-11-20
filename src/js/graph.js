const allinfos = [...document.querySelectorAll('.infos__info')];
// const infoActive = document.querySelector('.info--active');
let i = 0;
setInterval(() => {
  if (i == allinfos.length-1) {
    allinfos[i].classList.remove('info--active');
    i = 0;
    allinfos[i].classList.add('info--active');
    console.log('if')
  } else {
    console.log('else')
    allinfos[i].classList.remove('info--active');
    i++
    allinfos[i].classList.add('info--active');
  }


}, 2000);




var morphing = anime({
  targets: '.morphing__svg .polymorph',
  points: [
    { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true
});

