
function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}



function buttonMove() {
    var con = document.querySelector(".con")

    con.addEventListener("mouseenter", function () {
        gsap.to(".con span", {
            y: "-4vw"
        })
    })

    con.addEventListener("mouseleave", function () {
        gsap.to(".con span", {
            y: "0"
        })
    })
}

function buttonMove1() {
    var con2 = document.querySelector(".con2")

    con2.addEventListener("mouseenter", function () {
        gsap.to(".con2 span", {
            y: "-4vw"
        })
    })

    con2.addEventListener("mouseleave", function () {
        gsap.to(".con2 span", {
            y: "0"
        })
    })
}


function loaderMove() {
    var loader = gsap.timeline();

    loader.to("#loader img", {
        y: -50,
        opacity: 0,
        duration: 1.1
    })

        .to("#loader", {
            top: "-120%",
            duration: 1,
            delay: 0.5
        })

        .from("#logo img", {
            y: -50,
            opacity: 0,
            duration: 0.7
        })

        .from("#text h3", {
            y: 100,
            opacity: 0,
            duration: 0.7,
            stagger: 0.25,
        })

        .from("#text h1", {
            y: 100,
            opacity: 0,
            duration: 0.7,
            stagger: 0.25,
        })

        .from("#white", {

            opacity: 0,
            duration: 0.7,

        })

        .from("#black", {

            opacity: 0,
            duration: 0.7,

        })
}

function leftPage2() {
    gsap.from("#left-page2", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#left-page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers: true,
            scrub: 3
        }
    })
}

function rightPage2() {
    var right = gsap.timeline();
    right.from("#right-page2", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#right-page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers: true,
            scrub: 3
        }
    })




        .from("#right-page2 p", {
            y: 70,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: "#right-page2 p",
                scroller: "#main",
                start: "top 70%",
                end: "top 69%",
                // markers:true,
                scrub: 3
            }
        })

}

function leftPage3() {
    var sona = gsap.timeline();
    sona.from("#left-page3", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#left-page3",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers:true,
            scrub: 3
        }
    })

        .from("#left-page3 p", {
            y: 70,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: "#left-page3 p",
                scroller: "#main",
                start: "top 70%",
                end: "top 69%",
                // markers:true,
                scrub: 3
            }
        })


        .from("#right-page3", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#right-page3",
                scroller: "#main",
                start: "top 70%",
                end: "top 69%",
                // markers:true,
                scrub: 3
            }
        })

}

function leftPage4() {
    gsap.from("#left-page4", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#left-page4",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers:true,
            scrub: 3
        }
    })
}

function rightPage4() {
    var right = gsap.timeline();
    right.from("#right-page4", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#right-page4",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers:true,
            scrub: 3
        }
    })

        .from("#right-page4 p", {
            y: 70,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: "#right-page4 p",
                scroller: "#main",
                start: "top 70%",
                end: "top 69%",
                // markers:true,
                scrub: 3
            }
        })
}

function line1Gsap() {
    var lines = gsap.timeline();
    lines.from("#lines", {
        x:200,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#lines",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers: true,
            scrub: 3
        }
    })


}


function lineMove1() {
    var over = document.querySelector("#overlay")
    var row1 = document.querySelector("#row1")

    over.addEventListener("mouseenter", function () {
        row1.style.top = "0"


    })
    over.addEventListener("mouseleave", function () {

        row1.style.top = "-26%"


    })


    var over = document.querySelector("#overlay")

    over.addEventListener("mousemove", function (dets) {
        gsap.to("#pix", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1

        })
    })

    over.addEventListener("mouseleave", function (dets) {
        gsap.to("#pix", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0


        })
    })

}

function lineMove2() {
    var over2 = document.querySelector("#overlay2")
    var row2 = document.querySelector("#row2")

    over2.addEventListener("mouseenter", function () {
        row2.style.top = "18%"


    })
    over2.addEventListener("mouseleave", function () {

        row2.style.top = "-26%"


    })


    var over2 = document.querySelector("#overlay2")

    over2.addEventListener("mousemove", function (dets) {
        gsap.to("#pix2", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1

        })
    })

    over2.addEventListener("mouseleave", function (dets) {
        gsap.to("#pix2", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0


        })
    })

}

function lineMove3() {
    var over3 = document.querySelector("#overlay3")
    var row3 = document.querySelector("#row3")

    over3.addEventListener("mouseenter", function () {
        row3.style.top = "38%"


    })
    over3.addEventListener("mouseleave", function () {

        row3.style.top = "-26%"


    })


    var over3 = document.querySelector("#overlay3")

    over3.addEventListener("mousemove", function (dets) {
        gsap.to("#pix3", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1

        })
    })

    over3.addEventListener("mouseleave", function (dets) {
        gsap.to("#pix3", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0


        })
    })

}

function lineMove4() {
    var over4 = document.querySelector("#overlay4")
    var row4 = document.querySelector("#row4")

    over4.addEventListener("mouseenter", function () {
        row4.style.top = "57%"


    })
    over4.addEventListener("mouseleave", function () {

        row4.style.top = "-26%"


    })


    var over4 = document.querySelector("#overlay4")

    over4.addEventListener("mousemove", function (dets) {
        gsap.to("#pix4", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1

        })
    })

    over4.addEventListener("mouseleave", function (dets) {
        gsap.to("#pix4", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0


        })
    })

}


function page6Move() {
    var all = document.querySelectorAll("#center")
    all.forEach(function (c) {

        c.addEventListener("mouseenter", function () {
            document.querySelector("#cursor1").innerHTML = "View"
            document.querySelector("#cursor1").style.scale = 3.5
            document.querySelector("#cursor1").style.backgroundColor = "#fff"
            document.querySelector("#cursor1").style.borderColor = "#fff"
        })
        c.addEventListener("mouseleave", function () {
            document.querySelector("#cursor1").innerHTML = ""
            document.querySelector("#cursor1").style.scale = 1
            document.querySelector("#cursor1").style.backgroundColor = "transparent"
            document.querySelector("#cursor1").style.borderColor = "#e1e1e1"
        })

    })
}

function page7Move() {
    var all = document.querySelectorAll("#left-page7")
    all.forEach(function (e) {

        e.addEventListener("mouseenter", function () {
            document.querySelector("#cursor1").innerHTML = "View"
            document.querySelector("#cursor1").style.scale = 3.5
            document.querySelector("#cursor1").style.backgroundColor = "#fff"
            document.querySelector("#cursor1").style.borderColor = "#fff"
        })
        e.addEventListener("mouseleave", function () {
            document.querySelector("#cursor1").innerHTML = ""
            document.querySelector("#cursor1").style.scale = 1
            document.querySelector("#cursor1").style.backgroundColor = "transparent"
            document.querySelector("#cursor1").style.borderColor = "#e1e1e1"
        })

    })
}

function page8Move() {
    var all = document.querySelectorAll("#right-page7")
    all.forEach(function (e) {

        e.addEventListener("mouseenter", function () {
            document.querySelector("#cursor1").innerHTML = "View"
            document.querySelector("#cursor1").style.scale = 3.5
            document.querySelector("#cursor1").style.backgroundColor = "#fff"
            document.querySelector("#cursor1").style.borderColor = "#fff"
        })
        e.addEventListener("mouseleave", function () {
            document.querySelector("#cursor1").innerHTML = ""
            document.querySelector("#cursor1").style.scale = 1
            document.querySelector("#cursor1").style.backgroundColor = "transparent"
            document.querySelector("#cursor1").style.borderColor = "#e1e1e1"
        })

    })
}

function page8Center() {
    var all = document.querySelectorAll("#center-page8")
    all.forEach(function (e) {

        e.addEventListener("mouseenter", function () {
            document.querySelector("#cursor1").innerHTML = "View"
            document.querySelector("#cursor1").style.scale = 3.5
            document.querySelector("#cursor1").style.backgroundColor = "#fff"
            document.querySelector("#cursor1").style.borderColor = "#fff"
        })
        e.addEventListener("mouseleave", function () {
            document.querySelector("#cursor1").innerHTML = ""
            document.querySelector("#cursor1").style.scale = 1
            document.querySelector("#cursor1").style.backgroundColor = "transparent"
            document.querySelector("#cursor1").style.borderColor = "#e1e1e1"
        })

    })
}

function page9Move() {
    var all = document.querySelectorAll("#left-page9")
    all.forEach(function (e) {

        e.addEventListener("mouseenter", function () {
            document.querySelector("#cursor1").innerHTML = "View"
            document.querySelector("#cursor1").style.scale = 3.5
            document.querySelector("#cursor1").style.backgroundColor = "#fff"
            document.querySelector("#cursor1").style.borderColor = "#fff"
        })
        e.addEventListener("mouseleave", function () {
            document.querySelector("#cursor1").innerHTML = ""
            document.querySelector("#cursor1").style.scale = 1
            document.querySelector("#cursor1").style.backgroundColor = "transparent"
            document.querySelector("#cursor1").style.borderColor = "#e1e1e1"
        })

    })
}

function page9Right() {
    var all = document.querySelectorAll("#right-page9")
    all.forEach(function (e) {

        e.addEventListener("mouseenter", function () {
            document.querySelector("#cursor1").innerHTML = "View"
            document.querySelector("#cursor1").style.scale = 3.5
            document.querySelector("#cursor1").style.backgroundColor = "#fff"
            document.querySelector("#cursor1").style.borderColor = "#fff"
        })
        e.addEventListener("mouseleave", function () {
            document.querySelector("#cursor1").innerHTML = ""
            document.querySelector("#cursor1").style.scale = 1
            document.querySelector("#cursor1").style.backgroundColor = "transparent"
            document.querySelector("#cursor1").style.borderColor = "#e1e1e1"
        })

    })
}

function lineffAnime() {
    var overff = document.querySelector("#overlayff")
    var rowff = document.querySelector("#rowff")

    overff.addEventListener("mouseenter", function () {
        rowff.style.top = "10%"


    })

    overff.addEventListener("mouseleave", function () {
        rowff.style.top = "-20%"
    })

    var overff = document.querySelector("#overlayff")

    overff.addEventListener("mousemove", function(dets){
gsap.to("#pix5-page11", {
    top:`${dets.y}px`,
    left:`${dets.x}px`,
    scale:1

})

overff.addEventListener("mouseleave", function(dets){
    gsap.to("#pix5-page11", {
        top:`${dets.y}`,
        left:`${dets.x}`,
        scale:0
    })
})

    })
}

function lineffScroll() {


    gsap.from("#lineff",{
        y:50,
        opacity:0,
        duration:0.7,
        scrollTrigger:{
            trigger:"#lineff",
            scroller:"#main",
            start:"top 60%",
            end:"top 40%",
            scrub:3,
            // markers:true
        }
    })

    
}

function emailScroll() {
    gsap.from("input",{
        y:50,
        opacity:0,
        duration:0.7,
        
        scrollTrigger:{
            trigger:"input",
            scroller:"#main",
            start:"top 70%",
            end:"top 69%",
            scrub:3,
            // markers:true
        }
    })
}

function leftPage11() {
    gsap.from("#left-page11 h1",{
        y:50,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            trigger:"#left-page11 h1",
            scroller:"#main",
            start:"top 70%",
            end:"top 69%",
            scrub:3
        }
    })
}

function rightPage11() {
    gsap.from("#right-page11 h4",{
        y:50,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            trigger:"#right-page11 h4",
            scroller:"#main",
            start:"top 70%",
            end:"top 69%",
            scrub:3
        }
    })
}



function topMove() {
    var top = document.querySelector("#top")

    top.addEventListener("mouseenter", function(){
        gsap.to("#top span",{
            y:"-4vw"
        })
    })

    top.addEventListener("mouseleave", function(){
        gsap.to("#top span",{
            y:"0"
        })
    })
}

function madeMove() {
    var made = document.querySelector("#made")

    made.addEventListener("mouseenter", function(){
        gsap.to("#made span",{
            y:"-4vw"
        })
    })

    made.addEventListener("mouseleave", function(){
        gsap.to("#made span",{
            y:"0"
        })
    })
}


document.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor1").style.left = `${dets.x}px`
    document.querySelector("#cursor1").style.top = `${dets.y}px`

})










init();
buttonMove();
buttonMove1();
loaderMove();
leftPage2();
rightPage2();
leftPage3();
leftPage4();
rightPage4();
line1Gsap();
lineMove1();
lineMove2();
lineMove3();
lineMove4();
page6Move();
page7Move();
page8Move();
page8Center();
page9Move();
page9Right();
lineffAnime();
lineffScroll();
emailScroll();
leftPage11();
rightPage11();
topMove();
madeMove();






















// var all = document.querySelectorAll("#overlay")

// all.forEach(function(e){
//     e.addEventListener("mousemove", function(dets){
//         document.querySelector("#pix").style.left = `${dets.x }px`
//         document.querySelector("#pix").style.top = `${dets.y}px`
//         document.querySelector("#pix").style.scale = "1"


//     })
//     e.addEventListener("mouseleave", function(dets){
//         document.querySelector("#pix").style.left = `${dets.x }px`
//         document.querySelector("#pix").style.top = `${dets.y}px`
//        document.querySelector("#pix").style.scale = 0

//     })
// })





