function loco(params) {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();
gsap.to(".Branding-list ul li",{
    x : 0,
    duration : 5,
})
gsap.to(".nav-video", {
  height: "100%",
  width: "100%",
    scrollTrigger: {
        trigger: ".nav-video",
        scroller : "#main",
        start: "center 40%", // Animation starts when the center of nav-video touches the top of the viewport
        end: "bottom top", // Animation ends when the center of nav-video touches the bottom of the viewport
        scrub: 0.3,
        // markers: true // Optional: Add markers to visualize ScrollTrigger
    }
});



    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If you have pagination or navigation buttons, add them here
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

  var scrollerBox = document.querySelector('.swiper-container')
  var box = document.querySelector('.box')
  scrollerBox.addEventListener("mousemove",function(dets){
    box.style.left = dets.y +"px"
    box.style.top = dets.x +"px"
  })
    

