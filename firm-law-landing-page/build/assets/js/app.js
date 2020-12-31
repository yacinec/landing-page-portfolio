const navbar = document.querySelector('.navbar__header');
const menu = document.querySelector('.content');


// init controller
var controller = new ScrollMagic.Controller();
/*
// create a scene
new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    triggerHook: 0,
    triggerElement: navbar // start this scene after scrolling for 50px
})
    .addIndicators()
    .addTo(controller);*/


var revealElements = document.getElementsByClassName("content__section");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50,												 // start a little later
        triggerHook: 0.9,
    })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    //.addIndicators({name: "content__section " + (i+1) }) // add indicators (requires plugin)
    .addTo(controller);
}
    

var team = document.getElementsByClassName("team__list");
new ScrollMagic.Scene({
    triggerElement: team[0], // y value not modified, so we can use element as trigger as well
    offset: 0,												 // start a little later
    triggerHook: 0.5,
})
.setClassToggle(team[0], "visible") // add class toggle
//.addIndicators({name: "team__list"}) // add indicators (requires plugin)
.addTo(controller);



/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 538 || document.documentElement.scrollTop > 538)) {
    navbar.classList.add("fixed");
    console.log(document.documentElement.scrollTop);
  } else {
    navbar.classList.remove("fixed")
  }
}
*/

const links = document.querySelectorAll('.element__link');

links.forEach(element => {
    element.addEventListener("click", function(){
        links.forEach(e => e.classList.remove('active'));
        element.classList.add('active');
    })
});