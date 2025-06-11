var tl = gsap.timeline();

tl.from("#web-logo", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
});

tl.from(".nav-link", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

gsap.from("#poster", {
  scale: 0.5,
  duration: 1,
  delay: 0.3,
  opacity: 0,
});
