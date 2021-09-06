const tagline = document.querySelector('.tagline');
const subtagline = document.querySelector('.sub-tagline');

const tl = new TimelineMax();

tl.fromTo(tagline,1, {height:"0%"},{height:"100%", ease: Power2.easeInOut})
.fromTo(tagline,1, {width:"80%"},{width:"100%", ease: Power2.easeInOut});