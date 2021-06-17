const svg1 = document.querySelector('.svg-1')
const red = document.querySelector('.red')


// svg1.addEventListener('mouseenter', () => {
//   console.log(red);
//   red.classList.add('animateOn')
// })

gsap.registerPlugin(ScrollTrigger, TextPlugin);
gsap.from('.svg-1', {
  rotation: 27,
  x: 100,
  duration: 1
})

gsap.defaults({ease: "none"});

const tl = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
tl.to("h1 span", {duration: 4, text:" is so much fun you should try it some time!"})
  // .to(".green", {x:100})
  // .set(".green",  {text:"I am done"})