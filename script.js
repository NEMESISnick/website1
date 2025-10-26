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



var crsr = document.querySelector("#cursor")
var mn = document.querySelector("#main")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + 20 + "px"
  crsr.style.top = dets.y + 20 + "px"
})

// var so = document.querySelector("#soundon")
// var vd = document.querySelector("video")
// vd.addEventListener("mouseenter", function(dets){
//   so.style.left = dets.x + "px"
//   so.style.top = dets.y + "px"

// })

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".first",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:3
    }
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".first",
        scroller:"#main",
        // markers:true,
        start:"top -105%",
        end:"top -110%",
        scrub:3
    }
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".first",
        scroller:"#main",
        // markers:true,
        start:"top -450%",
        end:"top -500%",
        scrub:3
    }
})

tl.to(".first",{
    x:-280,
    duration:4
}, "same")

tl.to(".sec",{
    x:280,
    duration:4
}, "same")

tl.to("#page1 video",{
    width:"97%",
    duration:5
}, "same")

tl2.to("#main",{
  backgroundColor:"#fff"
})

tl3.to("#main",{
  backgroundColor:"#0F0D0D"
})

var boxes = document.querySelectorAll("#box")

boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "500px"
    crsr.style.height = "360px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor = "transparent"
    crsr.style.width = "15px"
    crsr.style.height = "15px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
  })
})



var get = document.querySelector("#footer f2")

get.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    get.style.height = "230px"
    get.style.width = "230px"

  })
})