function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoScroll();

function cursor() {
  var cursor = document.querySelector(".cursor");
  var page1Content = document.querySelector(".page-1-content");

  page1Content.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
    });
  });

  page1Content.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
    });
  });

  page1Content.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
    });
  });
}

cursor();

function pagesAnimations() {
  gsap.from(".page-2-content h2", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-2-content",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from(".page-2 span", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-2-content",
      scroller: ".main",
      start: "top 47%",
      end: "top 60%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from(".page-2 h1", {
    y: 120,
    stagger: 0.1,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-2-content",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",
      // markers: true,
      scrub: 5,
    },
  });

  gsap.from(".page-3 .page-3-top h2", {
    y: 20,
    stagger: 0.1,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-3-mid",
      scroller: ".main",
      start: "top 100%",
      end: "top 90%",
      // markers: true,
      scrub: 5,
    },
  });

  gsap.from(".page-3-mid h2", {
    x: 50, // Adjusted the x value for the starting position
    stagger: 0.1,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-3-mid",
      scroller: ".main",
      start: "top 50%",
      end: "top 30%",
      // markers: true,
      scrub: 5,
    },
  });

  gsap.from(".page-3-mid h1", {
    x: -50, // Adjusted the x value for the starting position
    stagger: 1,
    duration: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page-3-mid",
      scroller: ".main",
      start: "top 50%",
      end: "top 30%",
      // markers: true,
      scrub: 5,
    },
  });
}
pagesAnimations();

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
  });
  tl.to(".loader h3", {
    x: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
  });
  tl.to(".loader", {
    opacity: 0,
  });
  tl.from(".page-1-content h1 span", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: -0.3,
  });
  tl.to(".loader", {
    display: "none",
  });
}

loadingAnimation();
