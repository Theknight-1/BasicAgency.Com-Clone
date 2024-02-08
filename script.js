gsap.registerPlugin(ScrollTrigger);
gsap.to(".Branding-list ul li",{
    x : 0,
    duration : 5,
    ScrollTrigger:".Branding-list ul li"
})

gsap.to(".nav-video",{
    ScrollTrigger:{
        trigger:".nav-video",
        start:"top center",
        x:200,
        marker:true,
    }
})