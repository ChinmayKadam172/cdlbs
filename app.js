const tagline = document.querySelector('.tagline');
const logo = document.querySelectorAll('.logo');
const subtagline = document.querySelector('.sub-tagline');
const navbar = document.querySelector('.navbar');
const logoimg = document.querySelector('.logo-img');
const about = document.querySelector('#about');
const aboutbg = document.querySelector('aboutbg');

const tl = new TimelineMax();

tl.fromTo(navbar,1,{opacity:0},{opacity:1,ease: Power2.easeInOut})
.fromTo(tagline,1.2,{opacity:0},{opacity:1,ease: Power2.easeInOut});
