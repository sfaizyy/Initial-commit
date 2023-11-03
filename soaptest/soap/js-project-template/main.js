/*--------------------------------(HOME - gsap text animation)---------------------------------------*/
const mainHead = new SplitType('#main-head')
gsap.to('.char',{
  y: 0,
  stagger: 0.04,
  delay: 0.1,
  duration: .1
})
/*--------------------------------(ABOUT - shoelace dialog)---------------------------------------*/
const dialog = document.querySelector('.dialog-overview');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());

/*--------------------------------(CANDLES - gsap scrolltrigger)---------------------------------------*/
let tl = gsap.timeline({         //----split screen (green)
  scrollTrigger: {
    trigger: '.products-candles',
    start: 'top right',
    end: 'bottom 50%',
    scrub: true,
    markers: false,
    //toggleActions: 'play pause reverse complete' <---only if scrub: false
  }
})

tl.to('.products-candles', {     
  x: 850,
  duration: 2.5,
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

/*--------------------------------(INGREDIENTS - svg stagger animation)---------------------------------------*/
let targets = document.querySelectorAll('.toppings img')
gsap.to(targets, {
  y: 50,
  opacity: 0.1,
  stagger: 0.2,
  duration: 1,
  repeat:-1  //----loops the animation
});

/*--------------------------------(FOOTER - email validator)---------------------------------------*/
function validateEmail(){                
  let mail = document.querySelector('.mail-input');       //---store input field as a variable

  if(mail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {   //---email format
    alert("Thank you and welcome to the Soap Club!")
    return true
  }
  else{
    alert("Sorry! We couldn't process your email. Please try again.")
    return false;
  }

}

/*--------------------------------AUDIO---------------------------------------*/
const bgMusic = new Audio('audio/bgmusic.wav')


const soundBtn = document.querySelector('#sound-btn')
//console.log(obj.volume); // 1
soundBtn.addEventListener('click', () => {
  
  //bgMusic.volume = 0.75;
  //bgMusic.loop = true;

  if(bgMusic.paused){
    bgMusic.play()
    soundBtn.name = 'volume-up'
    bgMusic.volume = 0.1;
    bgMusic.loop = true;
   
  }else{
    bgMusic.pause()
    soundBtn.name = 'volume-mute'
  }
  
})


console.log("JavaScript is working!");